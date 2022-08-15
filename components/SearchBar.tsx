import React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export default function SearchBar() {
  const options = ["apple", "appoint", "zap", "cap", "japan"];

  return (
      <AutoComplete rollNavigation>
        <AutoCompleteInput variant="filled" placeholder="Search..." autoFocus />
        <AutoCompleteList>
          {options.map((option, oid) => (
            <AutoCompleteItem
              key={`option-${oid}`}
              value={option}
              textTransform="capitalize"
            >
              {option}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>

  );
}