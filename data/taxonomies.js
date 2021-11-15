import __taxonomies from "./jsons/__taxonomies.json";
import __stayTaxonomies from "./jsons/__stayTaxonomies.json";
import __experiencesTaxonomies from "./jsons/__experiencesTaxonomies.json";

const DEMO_CATEGORIES = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
}));

const DEMO_TAGS = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
}));

//

const DEMO_STAY_CATEGORIES = __stayTaxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  listingType: "stay",
}));
//
const DEMO_EXPERIENCES_CATEGORIES = __experiencesTaxonomies.map(
  (item) => ({
    ...item,
    taxonomy: "category",
    listingType: "experiences",
  })
);

export {
  DEMO_CATEGORIES,
  DEMO_TAGS,
  DEMO_STAY_CATEGORIES,
  DEMO_EXPERIENCES_CATEGORIES,
};
