function importAllImages(directoryURL) {

  function getImages(r) {
    return r.keys().map(r);
  }

  return getImages(
    require.context(
      `/data/${directoryURL}/`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
}

export default importAllImages;
