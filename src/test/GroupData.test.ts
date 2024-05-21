import { GroupDataByDepartment } from "../api/groupData";
import { dataForTest, expectDataForTest } from "../data/dataForTest";

describe("GroupDataByDepartment", () => {
  it("Test data should equal to expect data", () => {
    expect(GroupDataByDepartment(dataForTest)).toEqual(expectDataForTest);
  });
});
