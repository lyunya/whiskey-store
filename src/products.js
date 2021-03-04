const products = [
  {
    _id: '1',
    name: 'Maker’s Mark',
    image: '/images/makers_mark.webp',
    description: `Created by Bill Samuels, Sr. to be a bourbon that he would enjoy drinking himself, Maker's Mark is smooth and approachable with an easy finish - a true contrast to hot, harsh whiskies that "blow your ears off," and a downright revolutionary idea at the time. Maker's Mark is made slowly in small batches, in our National Historic Landmark distillery in Loretto, Kentucky. While it makes any cocktail better, a lot of folks still prefer it on its own, or over ice with a splash of water. `,
    brand: `Maker's Mark Distillery`,
    Region: 'Kentucky',
    Style: 'Bourbon',
    Country: 'USA',
    price: 29.99,
    Size: '750 ML',
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Bulleit Bourbon',
    image: '/images/bulleit.webp',
    description: `This fine small batch Kentucky bourbon from Bulleit is a bottle you'll want to keep stocked in your regular personal stash. A clean and smooth drinking blended whiskey, subtly spiced and oaky with flavors of nutmeg, maple and a touch of vanilla, Bulleit Kentucky bourbon is a treat neat or paired with your favorite mixer. Aged for 7 years in small batch barrels, this 90-proof whiskey delivers a long, dry finish and is known for its high rye content.`,
    brand: `Bulleit`,
    Region: 'Kentucky',
    Style: 'Bourbon',
    Country: 'USA',
    price: 26.99,
    Size: '750 ML',
    countInStock: 15,
    rating: 4.1,
    numReviews: 10,
  },
  {
    _id: '3',
    name: 'Four Roses Single Barrel Bourbon',
    image: '/images/four_roses.webp',
    description: `Four Roses Single Barrel Bourbon is one of the most highly regarded and unique bourbons available. Distinctive fruity aromas with delicate notes of honey and maple syrup and hints of nutmeg.`,
    brand: `Four Roses Distillery Co.`,
    Region: 'Kentucky',
    Style: 'Bourbon',
    Country: 'USA',
    price: 46.99,
    Size: '750 ML',
    countInStock: 8,
    rating: 4.8,
    numReviews: 5,
  },
  {
    _id: '4',
    name: 'Woodford Reserve Kentucky Straight Bourbon',
    image: '/images/woodford_reserve.webp',
    description: `Woodford Reserve is built around flavor. The art of making fine bourbon first took place on the site of the Woodford Reserve Distillery, a National Historic Landmark, in 1812. The perfectly balanced taste of our Kentucky Straight Bourbon Whiskey is composed of more than 200 detectable flavor notes, from bold grain and wood, to sweet aromatics, spice, and fruit & floral notes.`,
    brand: `Woodford Reserve`,
    Region: 'Kentucky',
    Style: 'Bourbon',
    Country: 'USA',
    price: 36.99,
    Size: '750 ML',
    countInStock: 13,
    rating: 4.2,
    numReviews: 7,
  },
  {
    _id: '5',
    name: 'Jameson Irish Whiskey',
    image: '/images/jameson.webp',
    description: `DOUBLE GOLD 2017 SF SPIRITS COMP. A blend of pot still & fine grain whiskeys that is as versatile as it is smooth. It's a perfect balance of spicy, nutty & vanilla notes with hints of sweet sherry.`,
    brand: `Jameson`,
    Region: 'Ireland',
    Style: 'Irish Whiskey',
    Country: 'Ireland',
    price: 22.99,
    Size: '750 ML',
    countInStock: 22,
    rating: 3.4,
    numReviews: 13,
  },
  {
    _id: '6',
    name: 'Redbreast 12 Year Old Irish Whiskey',
    image: '/images/redbreast.webp',
    description: `92 PTS WINE ENTHUSIAST, DOUBLE GOLD 2005 SAN FRANCISCO SPIRITS COMPETITION. Made with malted and unmalted barley it is the only continuously produced 100% pure pot still Irish Whisky.`,
    brand: `Redbreast`,
    Region: 'Ireland',
    Style: 'Irish Whiskey',
    Country: 'Ireland',
    price: 54.99,
    Size: '750 ML',
    countInStock: 6,
    rating: 4.6,
    numReviews: 10,
  },
  {
    _id: '7',
    name: 'Tullamore Dew Irish Whiskey',
    image: '/images/tullamore_dew.webp',
    description: `94 PTS BEST BUY, WINE ENTHUSIAST, GOLD MEDAL 2006 SAN FRANCISCO SPIRITS COMPETITION, 90 PTS WILFRED WONG Light straw; honeysuckle, pencil lead, pure and fine; medium to full bodied; long finish.`,
    brand: `Tullamore Dew`,
    Region: 'Ireland',
    Style: 'Irish Whiskey',
    Country: 'Ireland',
    price: 24.99,
    Size: '750 ML',
    countInStock: 7,
    rating: 3.9,
    numReviews: 11,
  },
  {
    _id: '8',
    name: 'Teeling Irish Whiskey',
    image: '/images/teeling.webp',
    description: `DOUBLE GOLD BEST OF SHOW 2015 SF SPIRITS COMP. Our Flagship Irish whiskey and our attempt to create the most interesting Blended Irish whiskey. This small batch bottling of hand selected casks.`,
    brand: `Teeling Irish`,
    Region: 'Ireland',
    Style: 'Irish Whiskey',
    Country: 'Ireland',
    price: 36.99,
    Size: '750 ML',
    countInStock: 9,
    rating: 4.2,
    numReviews: 13,
  },
  {
    _id: '9',
    name: 'Hibiki Harmony Japanese Whiskey',
    image: '/images/hibiki_harmony.webp',
    description: `Hibiki Harmony Japanese Whisky is produced by the Suntory Whisky House of Japan. A fine example of the quality of whisky coming out of Japan, Harmony offers subtle flavors of cinnamon, orange, apricot, pepper and oak and is a blend of more than 10 malt and grain whiskies, aged in five different casks, from Suntory's three distilleries.`,
    brand: `Suntory`,
    Region: 'Japan',
    Style: 'Japanese',
    Country: 'Japan',
    price: 84.99,
    Size: '750 ML',
    countInStock: 3,
    rating: 4.1,
    numReviews: 7,
  },
  {
    _id: '10',
    name: 'Yamazaki 12 Yr Single Malt Japanese',
    image: '/images/yamazaki.webp',
    description: `THREE STARS RECOMMENDED SPIRIT JOURNAL Medium yellow, gold; trace of peat in the aromas; medium to full bodied; persistent, delicate, trace citrus in the flavors, light caramel.`,
    brand: `Yamazaki`,
    Region: 'Japan',
    Style: 'Japanese',
    Country: 'Japan',
    price: 119.99,
    Size: '750 ML',
    countInStock: 7,
    rating: 4.8,
    numReviews: 14,
  },
  {
    _id: '10',
    name: 'Iwai Japanese Whiskey',
    image: '/images/iwai.webp',
    description: `Kiichiro Iwai, the name sake for this Mars Whisky, was a silent pioneer of Japan whisky. A majority of corn balanced with light malt aged in ex-bourbon barrels.`,
    brand: `Iwai`,
    Region: 'Japan',
    Style: 'Japanese',
    Country: 'Japan',
    price: 39.99,
    Size: '750 ML',
    countInStock: 6,
    rating: 4.6,
    numReviews: 9,
  },
];

export default products;