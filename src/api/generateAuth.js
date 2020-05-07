import CryptoJS from "crypto-js";

export const generateAuth = (query, yahoo_forecast_url) => {
  const consumer_key = process.env.REACT_APP_CONSUMER_KEY;
  const consumer_secret =  process.env.REACT_APP_CONSUMER_SECRET;
  const concat = "&";
  const merged = {};
  const oauth = {
    oauth_consumer_key: consumer_key,
    oauth_nonce: Math.random()
      .toString(36)
      .substring(2),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
    oauth_version: "1.0"
  };

  Object.assign(merged, query, oauth);
  const merged_arr = Object.keys(merged)
    .sort()
    .map(key => [`${key}=${encodeURIComponent(merged[key])}`]);

  const signature_base_str = [
    "GET",
    encodeURIComponent(yahoo_forecast_url),
    encodeURIComponent(merged_arr.join(concat))
  ].join(concat);

  const composite_key = encodeURIComponent(consumer_secret) + concat;
  const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  const signature = hash.toString(CryptoJS.enc.Base64);

  oauth["oauth_signature"] = signature;

  const auth_header =
    "OAuth " +
    Object.keys(oauth)
      .map(key => [`${key}="${oauth[key]}"`])
      .join(",");

  return auth_header;
}
