export const formatNumber = (value: string): string => {
  if (value[0] === "(" && value.length === 1) return "";
  const incoming = value.replace(/\D/g, "");
  const input = incoming.substring(0, 10);
  const areaCode = input.substring(0, 4);
  const start = input.substring(4, 6);
  const mid = input.substring(6, 8);
  const last = input.substring(8, 10);

  if (input.length > 8) {
    return `(${areaCode}) ${start}-${mid}-${last}`;
  } else if (input.length > 6) {
    return `(${areaCode}) ${start}-${mid}`;
  } else if (input.length > 4) {
    return `(${areaCode}) ${start}`;
  } else if (input.length > 0) {
    return `(${areaCode}`;
  }
  return "";
};
