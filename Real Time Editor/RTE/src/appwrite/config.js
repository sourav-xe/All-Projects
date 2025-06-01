import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            const payload = {
                String: String(slug || ""),          // ← Slug
                Content: String(content || ""),
                Image: String(featuredImage || ""),
                Status: String(status || "inactive"),
                Title: String(title || "")
                // ⚠️ userId not used here because not in schema
            };

            console.log("CREATE POST PAYLOAD", payload);

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                payload
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(documentId, { title, content, featuredImage, status }) {
        try {
            const payload = {
                title: String(title || ""),
                content: String(content || ""),
                featuredImage: String(featuredImage || ""),
                status: String(status || "inactive")
            };

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                payload
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(documentId) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(documentId) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

   getFilePreview(fileId) {
  // Check if the fileId is passed correctly
  if (!fileId) {
    console.error('Error: Missing required parameter "fileId".');
    throw new Error('Missing required parameter: fileId');
  }

  console.log('Getting file preview for fileId:', fileId); // Debugging the fileId

  return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
    .then(response => {
      // Assuming response contains a 'href' or 'url' property with the image URL.
      return response.href || response.url || '';  // Modify according to what Appwrite returns
    })
    .catch(error => {
      console.error('Appwrite Service Error:', error);
      throw error;
    });
}

}

const service = new Service();
export default service;
