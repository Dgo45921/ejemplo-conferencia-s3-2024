import { S3Client, PutObjectCommand, ListObjectsCommand } from "@aws-sdk/client-s3";
import { readFileSync } from 'fs';
import { lookup } from 'mime-types';

const jsonFilePath = '../credentials.json';
const jsonData = JSON.parse(readFileSync(jsonFilePath, 'utf8'));
const accessKey = jsonData['ACCESS_KEY'];
const secretKey = jsonData['SECRET_KEY'];
const bucketName = 'conferencia-s3-2024';

const s3 = new S3Client({region: 'us-east-1', credentials: {accessKeyId: accessKey, secretAccessKey: secretKey}});

export async function uploadPicture(profilePicture, profilePictureName) {
    const contentType = lookup(profilePictureName);
    try {
        const uploadParams = {
            Bucket: bucketName,
            Key: profilePictureName,
            Body: profilePicture.buffer,
            ContentType: contentType
        };
        await s3.send(new PutObjectCommand(uploadParams));
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function getAllObjectsUrl() {
    const params = { Bucket: bucketName };
    try {
        const data = await s3.send(new ListObjectsCommand(params));
        const objectsUrl = data.Contents.map(item => {
            return {
                Key: item.Key,
                Url: `https://${bucketName}.s3.amazonaws.com/${item.Key}`
            };
        });
        return objectsUrl;
    } catch (error) {
        console.error(error);
        return [];
    }
}