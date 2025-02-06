import { createContext, useContext, useState } from "react";

export const FoodContext = createContext<{
  food: { title: string; picture: string; timeMinutes: number }[];
  setFood: React.Dispatch<
    React.SetStateAction<
      { title: string; picture: string; timeMinutes: number }[]
    >
  >;
}>({
  food: [],
  setFood: () => {},
});

export const FoodContextProvider = (props: { children: React.ReactNode }) => {
  const [food, setFood] = useState([
    {
      title: "Couscous",
      picture: "https://www.rustica.fr/images/couscous-tajine.jpg",
      timeMinutes: 110,
    },
    {
      title: "tajine",
      picture:
        "https://images.radio-canada.ca/q_auto,w_844/v1/alimentation/ingredient/16x9/tajine-generique.jpg",
      timeMinutes: 10,
    },
    {
      title: "Pizza",
      picture:
        "https://api.dood.com/api/storages/1e7678fc-de65-4aaa-8e42-bef3d9aac36d/preview/cover_uber_cel_24-min.jpg",
      timeMinutes: 110,
    },
  ]);

  return (
    <FoodContext.Provider value={{ food, setFood }}>
      {props.children}
    </FoodContext.Provider>
  );
};
export const useFood = () => useContext(FoodContext);
