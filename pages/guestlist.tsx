import GuestCard from "../src/components/GuestCard";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import Filters from "../src/components/Filters";
import { FilterModal } from "../src/components/Filters/style";
import Cities from "../src/consts/cities.json";
import { useState } from "react";
import { getLanguage } from "../src/lang/getLanguages";
const getTranslation = (key) => getLanguage("filters", key);

export default function App(props) {
  const [filters, setFilters] = useState({
    city: null,
    guests: null,
    timeframe: null,
    toddler: null,
  });
  return (
    <CompositionAppBody>
      <Filters
        filters={[
          {
            name: getTranslation("location"),
            options: Cities.map(({ name }) => ({ value: name, label: name })),
            onSubmit: (e) => setFilters({ ...filters, city: e }),
            value: filters.city,
          },
          {
            name: getTranslation("numberOfGuests"),
            options: [
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: ">5", label: "więcej" },
            ],
            onSubmit: (e) => setFilters({ ...filters, guests: e }),
            value: filters.guests,
          },
          {
            name: getTranslation("timeframe"),
            options: [
              {
                value: getTranslation("oneWeek"),
                label: getTranslation("oneWeek"),
              },
              {
                value: getTranslation("twoWeeks"),
                label: getTranslation("twoWeeks"),
              },
              {
                value: getTranslation("month"),
                label: getTranslation("month"),
              },
              {
                value: getTranslation("longerThanMonth"),
                label: getTranslation("longerThanMonth"),
              },
            ],
            onSubmit: (e) => setFilters({ ...filters, timeframe: e }),
            value: filters.timeframe,
          },
          {
            name: getTranslation("kidsBelow2yo"),
            options: [
              { value: getTranslation("yes"), label: getTranslation("yes") },
              { value: getTranslation("no"), label: getTranslation("no") },
            ],
            onSubmit: (e) => setFilters({ ...filters, toddler: e }),
            value: filters.toddler,
          },
        ]}
      />
      <CompositionContainer>
        <GuestCard
          name="Ivan"
          arrival="28 lutego 2022"
          preferredPlace="Wrocław"
          numberOfGuests={3}
          elderly
          guests={["zona", "corka", "syn"]}
          animals={["pies", "kot"]}
          avatar="https://placehold.jp/3d4070/ffffff/150x150.png"
        />
        <GuestCard
          name="Anna"
          arrival="1 marca 2022"
          preferredPlace="Poznań"
          numberOfGuests={1}
          animals={["pies", "kot"]}
        />
        <GuestCard
          name="Nazar"
          arrival="1 marca 2022"
          numberOfGuests={4}
          toddler="6 months"
          animals={["pies"]}
          disabled
        />
      </CompositionContainer>
    </CompositionAppBody>
  );
}

/**
 * Temporary dumy data
 * TODO: api/getAccommodations
 */
