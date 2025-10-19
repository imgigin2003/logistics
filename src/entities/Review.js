// src/api/base44Client.js
// This file simulates client-side interaction with a local reviews.json file.
// It provides CRUD operations for reviews stored in src/data/reviews.json.

import reviewsData from "@/api/reviews.json";

export const Reviews = {
  entities: {
    Review: {
      /**
       * Creates a new review record.
       * @param {object} data - Review data to create.
       * @returns {Promise<object>} - Resolves with the created review object (including a generated ID).
       */
      create: async (data) => {
        console.log("Client: Creating Review with data:", data);
        // Generate a temporary ID based on timestamp and random string
        const newId = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 9)}`;
        const newReview = {
          id: newId,
          ...data,
          created_date: new Date().toISOString(),
        };
        // In a real project, this would update src/data/reviews.json
        // For simulation, return the new review object
        return Promise.resolve(newReview);
      },

      /**
       * Lists review records.
       * @param {string} orderBy - Sorting string (e.g., '-created_date').
       * @param {number} limit - Maximum number of records to return.
       * @returns {Promise<Array<object>>} - Resolves with an array of review objects.
       */
      list: async (orderBy = "", limit = 10) => {
        console.log(
          `Client: Listing Reviews (orderBy: ${orderBy}, limit: ${limit})`
        );
        let reviews = reviewsData.reviews || [];

        // Apply sorting if specified
        if (orderBy) {
          const isDesc = orderBy.startsWith("-");
          const field = isDesc ? orderBy.slice(1) : orderBy;
          reviews = [...reviews].sort((a, b) => {
            const aValue = a[field] || "";
            const bValue = b[field] || "";
            return isDesc
              ? bValue.localeCompare(aValue)
              : aValue.localeCompare(bValue);
          });
        }

        return Promise.resolve(reviews.slice(0, limit));
      },

      /**
       * Filters review records.
       * @param {object} filters - Filters to apply to the review list.
       * @param {string} orderBy - Sorting string.
       * @param {number} limit - Maximum number of records to return.
       * @returns {Promise<Array<object>>} - Resolves with an array of filtered review objects.
       */
      filter: async (filters, orderBy = "", limit = 10) => {
        console.log(
          `Client: Filtering Reviews (filters: ${JSON.stringify(
            filters
          )}, orderBy: ${orderBy}, limit: ${limit})`
        );
        let reviews = reviewsData.reviews || [];

        // Apply filters
        if (filters) {
          reviews = reviews.filter((review) => {
            return Object.entries(filters).every(([key, value]) => {
              if (Array.isArray(value)) {
                return value.includes(review[key]);
              }
              return review[key] === value;
            });
          });
        }

        // Apply sorting if specified
        if (orderBy) {
          const isDesc = orderBy.startsWith("-");
          const field = isDesc ? orderBy.slice(1) : orderBy;
          reviews = [...reviews].sort((a, b) => {
            const aValue = a[field] || "";
            const bValue = b[field] || "";
            return isDesc
              ? bValue.localeCompare(aValue)
              : aValue.localeCompare(bValue);
          });
        }

        return Promise.resolve(reviews.slice(0, limit));
      },

      /**
       * Updates a review record.
       * @param {string} id - ID of the review to update.
       * @param {object} data - Updated review data.
       * @returns {Promise<object>} - Resolves with the updated review object.
       */
      update: async (id, data) => {
        console.log(
          `Client: Updating Review (id: ${id}, data: ${JSON.stringify(data)})`
        );
        const updatedReview = {
          id,
          ...data,
          updated_date: new Date().toISOString(),
        };
        // In a real project, this would update the review in src/data/reviews.json
        return Promise.resolve(updatedReview);
      },

      /**
       * Deletes a review record.
       * @param {string} id - ID of the review to delete.
       * @returns {Promise<void>} - Resolves when deletion is complete.
       */
      delete: async (id) => {
        console.log(`Client: Deleting Review (id: ${id})`);
        // In a real project, this would remove the review from src/data/reviews.json
        return Promise.resolve();
      },

      /**
       * Returns the schema for a review entity.
       * @returns {Promise<object>} - Resolves with the review schema.
       */
      schema: async () => {
        console.log("Client: Getting Review schema");
        return Promise.resolve({
          company_name: { type: "string" },
          contact_person: { type: "string" },
          email: { type: "string", format: "email" },
          phone: { type: "string" },
          service_type: {
            type: "string",
            enum: [
              "freight_transport",
              "warehousing",
              "supply_chain",
              "international_shipping",
              "last_mile_delivery",
              "customs_clearance",
            ],
          },
          rating: { type: "number", minimum: 1, maximum: 5 },
          review_text: { type: "string" },
          would_recommend: { type: "boolean" },
        });
      },
    },
  },
};
