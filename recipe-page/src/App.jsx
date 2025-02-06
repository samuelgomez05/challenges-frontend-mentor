import List from "./components/List"
import ItemList from "./components/ItemList"
import Section from "./components/Section"

function App() {
  const preparation= [
    {
      "title": "Total:",
      "value": "Approximately 10 minutes"
    },
    {
      "title": "Preparation:",
      "value": "5 minutes"
    },
    {
      "title": "Cooking:",
      "value": "5 minutes"
    }
  ]

  const ingredients = [
    {
      "value": "2-3 large eggs"
    },
    {
      "value": "Salt, to taste"
    },
    {
      "value": "Pepper, to taste"
    },
    {
      "value": "1 tablespoon of butter or oil"
    },
    {
      "value": "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
    }
  ]

  const instructions = [
    {
      "title": "Beat the eggs:",
      "value": "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
    },
    {
      "title": "Heat the pan:",
      "value": "Place a non-stick frying pan over medium heat and add butter or oil."
    },
    {
      "title": "Cook the omelette:",
      "value": "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    },
    {
      "title": "Add fillings (optional):",
      "value": "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
    },
    {
      "title": "Fold and serve:",
      "value": "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    },
    {
      "title": "Enjoy:",
      "value": "Serve hot, with additional salt and pepper if needed."
    }
  ]

  return (
    <>
      <main className="mx-auto max-w-3xl bg-white md:my-28 md:rounded-3xl">
        <figure className="md:p-10 md:pb-0">
          <img className="size-full object-cover md:overflow-hidden md:rounded-xl" src="assets/images/image-omelette.jpeg" alt="Simple Omelette Recipe" />
        </figure>
        <section className="flex flex-col gap-8 p-8 pb-0 md:p-10 md:pb-0">
          <h1 className="font-young-serif text-4xl text-stone-900">Simple Omelette Recipe</h1>
          <p className="text-stone-600">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          <div className="rounded-xl bg-rose-50 p-6">
            <p className="mb-4 text-xl font-semibold text-rose-800">Preparation time</p>
            <List>
              {
                preparation.map(({ title, value }, index) => {
                  return <ItemList key={index} markerColor="rose" title={title}>{value}</ItemList>
                })
              }
            </List>
          </div>
        </section>
        <div className="divide-stone-150 divide-y px-8 md:px-10">
          <Section title="Ingredients">
            <List>
              {
                ingredients.map(({ value }, index) => {
                  return <ItemList key={index} markerColor="brown">{value}</ItemList>
                })
              }
            </List>
          </Section>
          <Section title="Instructions">
            <List ordered>
              {
                instructions.map(({ title, value }, index) => {
                  return <ItemList key={index} markerColor="brown" title={title} ordered number={index + 1}>{value}</ItemList>
                })
              }
            </List>
          </Section>
          <Section title="Nutrition">
              <p className="mb-4 text-stone-600">The table below shows nutritional values per serving without the additional fillings.</p>
              <table className="grid grid-cols-2">
                <thead>
                  <tr className="grid text-left text-stone-600">
                    <th className="border-stone-150 border-b p-2 pl-8 font-normal">Calories</th>
                    <th className="border-stone-150 border-b p-2 pl-8 font-normal">Carbs</th>
                    <th className="border-stone-150 border-b p-2 pl-8 font-normal">Protein</th>
                    <th className="p-2 pl-8 font-normal">Fat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-brown-800 grid font-bold">
                    <td className="border-stone-150 border-b p-2">277kcal</td>
                    <td className="border-stone-150 border-b p-2">0g</td>
                    <td className="border-stone-150 border-b p-2">20g</td>
                    <td className="p-2">22g</td>
                  </tr>
                </tbody>
              </table>
          </Section>
        </div>
      </main>
      <div class="p-4 text-center text-xs">
        Challenge by <a class="text-[hsl(228,_45%,_44%)]" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a class="text-[hsl(228,_45%,_44%)]" href="https://github.com/samuelgomez05" target="_blank">Samuel Gomez</a>.
      </div>
    </>
  )
}

export default App
