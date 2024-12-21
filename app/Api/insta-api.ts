export const getMedia = async (media_url: string) => {
  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/post_info?code_or_id_or_url=${media_url}&include_insights=true`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPIDAPI_KEY}`,
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const getShortCode = (url: string): string | null => {
  // Regular expression to capture the first or second item after '/stories/' or other patterns
  const storiesMatch = url.match(/\/stories\/(?:[^\/]+\/)?([^\/?]+)\/?$/);
  const generalMatch = url.match(/\/(?:p|reel|reels|tv)\/([^\/?]+)(?:\/|$)/);

  if (url.includes("/stories/")) {
    // Return the second item after '/stories/' if it's a stories URL
    return storiesMatch?.[1] || null;
  } else {
    // Return the first item after '/p/', '/reel/', etc., for other types of URLs
    return generalMatch?.[1] || null;
  }
};
export const handleDownload = async (mediaUrl: any, filename: string) => {
  try {
    // Encode the media URL to be safely used in the query string
    const encodedMediaUrl = encodeURIComponent(mediaUrl.url);

    // Fetch from your API endpoint with the encoded URL
    const response = await fetch(`/api/downloadImage?url=${encodedMediaUrl}`);

    if (response.ok) {
      // Convert the response to a blob
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = filename; // Use the provided filename
      document.body.appendChild(a);
      a.click();

      // Clean up by removing the anchor and revoking the object URL
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      console.error("Failed to download media:", response.text);
      const errorText = await response.text();
      console.error("Error message:", errorText);
    }
  } catch (error) {
    console.error("Error downloading media:", error);
  }
};
