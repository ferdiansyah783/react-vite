export const queryBuild = (query) => {
  const _availableQuery = [];

  Object.keys(query).map((key) => {
    if (query[key] !== "") _availableQuery.push(key + "=" + query[key]);

    return _availableQuery;
  });

  return _availableQuery.join("&");
};
