export const getSrc = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  })
}
