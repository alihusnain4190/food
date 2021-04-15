function setPizzaSizePrice(data) {
  let newArr = [];
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    const { p_larg, p_medium, p_small, dip, p_image, p_id, p_name } = data[i];
    let obj = {
      p_id: p_id,
      p_image: p_image,
      p_name: p_name,
      dip: dip,
      p_size: [
        { size: "larg", price: p_larg },
        {
          size: "medium",
          price: p_medium,
        },
        {
          size: "sml",
          price: p_small,
        },
      ],
    };
    newArr.push(obj);
  }
  return newArr;
}
module.exports = setPizzaSizePrice;
