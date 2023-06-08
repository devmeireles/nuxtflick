export const removeDuplicatedMovieFromArray = (ids: any[], array2: any[], key: string) => {
  const data = array2.filter(item => !ids.includes(item.id));
  return data;  
}