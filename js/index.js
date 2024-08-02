import { db } from './database.js';
import { Suspense } from 'react';

async function ConferencePage({ slug }) {
  const conf = await db.Confs.find({ slug });
  return (
    <ConferenceLayout conf={conf}>
      <Suspense fallback={<TalksLoading />}>
        <Talks confId={conf.id} />
      </Suspense>
    </ConferenceLayout>
  );
}






import { Autocomplete, Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });

const basicAutocomplete = document.querySelector('#search-autocomplete');
const data = ['One', 'Two', 'Three', 'Four', 'Five'];
const dataFilter = (value) => {
  return data.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new Autocomplete(basicAutocomplete, {
  filter: dataFilter
});
// Initialization for ES Users
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });