import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

const accountId = process.env.R2_ACCOUNT_ID!;
const accessKeyId = process.env.R2_ACCESS_KEY_ID!;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY!;
const bucketName = process.env.R2_BUCKET_NAME!;
const publicUrl = process.env.R2_PUBLIC_URL!;

export const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function uploadFile(
  key: string,
  body: Buffer,
  contentType: string
) {
  await r2.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );

  return `${publicUrl}/${key}`;
}

export async function deleteFile(key: string) {
  await r2.send(
    new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    })
  );
}

export async function uploadBlogCover(
  fileBuffer: Buffer,
  extension = "jpg"
) {
  const filename = `blog/blog-cover-${Date.now()}.${extension}`;

  const url = await uploadFile(
    filename,
    fileBuffer,
    `image/${extension}`
  );

  return {
    key: filename,
    url,
  };
}

export async function uploadProductImage(
  fileBuffer: Buffer,
  extension = "jpg"
) {
  const filename = `products/product-${Date.now()}.${extension}`;

  const url = await uploadFile(
    filename,
    fileBuffer,
    `image/${extension}`
  );

  return {
    key: filename,
    url,
  };
}