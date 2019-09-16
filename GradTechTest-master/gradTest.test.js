function createMenuData(data) {
  const results = []
  
    data.forEach(function (row) {
      const splitRow = row.split('/')
  
      if (splitRow[1] != undefined) {
        const foundIndex = results.findIndex(n => n.title == splitRow[0])
  
        if (foundIndex == -1) {
            results.push({
              title: splitRow[0],
              data: [splitRow[1]]
            })
        } else {
            results[foundIndex].data.push(splitRow[1])
        }
      }
    })
  
    return results
  }
  
describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });