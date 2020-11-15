/**
 * TODO(developer): Uncomment the following lines before running the sample.
 * Note: when creating a signed URL, unless running in a GCP environment,
 * a service account must be used for authorization.
 */

// Imports the Google Cloud client library
import { Storage, GetSignedUrlConfig } from '@google-cloud/storage';

const bucketName = 'contest-submission';
// Creates a client
const storage = new Storage();

export default async function generateV4SignedPolicy(filename: string) {
  const options: GetSignedUrlConfig = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType: 'application/octet-stream',
  };

  // Get a v4 signed URL for uploading file
  const [url] = await storage
    .bucket(bucketName)
    .file(filename)
    .getSignedUrl(options);

  console.log('Generated PUT signed URL:');
  console.log(url);
  console.log('You can use this URL with any user agent, for example:');
  console.log(
    "curl -X PUT -H 'Content-Type: application/octet-stream' "
   + `--upload-file my-file '${url}'`,
  );
  generateV4SignedPolicy('test').catch(console.error);
}
