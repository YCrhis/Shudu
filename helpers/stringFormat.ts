export const GetInitials = (name: string):string => {
  const employee = name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);
    return employee;
};
