import { IGroupData, Idata } from "../types/type";

export const GroupDataByDepartment = (datas: Idata[]): IGroupData => {
  const GroupData: IGroupData = {};

  datas.forEach((data) => {
    const { firstName, lastName, gender, age, hair, address, company } = data;
    if (!GroupData[company.department]) {
      GroupData[company.department] = {
        male: 0,
        female: 0,
        ageRange: `${age}-${age}`,
        hair: {},
        addressUser: {},
      };
    }
    const dataDepartment = GroupData[company.department];
    if (gender === "male") {
      dataDepartment.male += 1;
    } else if (gender === "female") {
      dataDepartment.female += 1;
    }

    const previousAges = dataDepartment.ageRange.split("-");
    if (age < parseInt(previousAges[0])) {
      dataDepartment.ageRange = `${age.toString()}-${previousAges[1]}`;
    } else if (age > parseInt(previousAges[1])) {
      dataDepartment.ageRange = `${previousAges[0]}-${age.toString()}`;
    }

    if (!dataDepartment.hair[hair.color]) {
      dataDepartment.hair[hair.color] = 1;
    } else {
      dataDepartment.hair[hair.color] += 1;
    }

    dataDepartment.addressUser[firstName + lastName] = address.postalCode;
  });

  return GroupData;
};
