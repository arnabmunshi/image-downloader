const images = [
  {
    DefectSubCategoryKey: 2,
    DefectSubCategory: "Mashed_JoiningArea",
    OutputImagePath: "DefectImage1.Jpeg",
    ContributionRank: 1,
  },
  {
    DefectSubCategoryKey: 2,
    DefectSubCategory: "Mashed_JoiningArea",
    OutputImagePath: "DefectImage2.Jpeg",
    ContributionRank: 1,
  },
  {
    DefectSubCategoryKey: 2,
    DefectSubCategory: "Mashed_JoiningArea",
    OutputImagePath: "DefectImage3.Jpeg",
    ContributionRank: 1,
  },
];
const imagePath = "http://65.0.154.115:6500/images/";

const fs = require("fs");
const request = require("request");

const download = (url, path) => {
	return new Promise((resolve, reject) => {
		try {
			request.head(url, (err, res, body) => {
				request(url).pipe(fs.createWriteStream(path)).on('close', resolve);
			});
		} catch (error) {
			reject(error);
		}
	});
};

for (let i = 0; i < images.length; i++) {
  const image = images[i].OutputImagePath;
  const url = `${imagePath}${image}`;
  const path = `./images/${image}`;

  await download(url, filePath);
}
