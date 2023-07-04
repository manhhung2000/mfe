import requestAPI from "./index";

const serviceEndpoints = {
  detail: ({ productId }) => `/products/${productId}`,
  getCart: () => "/carts/1",
};

const serviceApi = {
  getCart: async () => {
    try {
      const response = await requestAPI.get(serviceEndpoints.getCart());

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getDetail: async (productId) => {
    try {
      const response = await requestAPI.get(
        serviceEndpoints.detail({ productId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default serviceApi;
