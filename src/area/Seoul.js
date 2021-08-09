import React from "react";
import "../CovidMap.css";

function Seoul({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="서울"
      className="area"
      strokeMiterlimit="1"
      points="119.063,222.159 119.255,221.584   119.446,221.967 119.638,221.393 120.213,220.817 120.021,220.243 120.021,220.243 119.83,219.285 120.213,217.56 121.363,217.751   121.363,217.751 121.746,218.135 121.938,218.518 122.321,218.901 122.896,219.476 123.088,219.859 123.663,220.243   123.854,220.435 124.621,220.817 126.729,222.159 127.304,222.542 127.496,222.542 128.262,223.117 128.646,223.5 129.412,223.692   129.983,223.692 130.945,223.309 131.329,223.5 131.712,223.117 132.095,223.117 132.479,222.734 132.862,222.734 133.049,222.542   133.245,221.393 133.628,220.817 134.012,220.243 135.924,220.626 137.266,219.476 138.032,213.918 138.224,213.727   138.224,213.343 138.224,213.152 138.416,212.96 138.607,212.385 138.224,211.619 138.799,210.852 139.182,209.319 139.182,208.936   138.416,208.552 138.032,207.978 138.224,207.978 138.416,208.169 138.607,208.361 138.991,208.552 139.374,208.744   140.907,208.552 141.865,207.786 143.398,207.211 143.59,207.019 143.59,206.828 143.973,206.254 144.356,206.063 145.123,205.871   147.231,207.978 147.423,208.552 147.806,209.127 148.765,210.66 148.956,211.044 149.723,211.619 151.256,208.936 151.064,207.594   150.681,206.828 151.064,206.063 151.639,205.488 152.406,204.721 152.981,202.997 152.789,202.038 155.28,200.313 155.855,197.63   157.58,197.056 158.922,197.247 162.372,198.972 164.671,199.355 165.054,199.164 165.246,198.78 170.229,199.738 170.229,199.93   170.037,204.146 170.037,204.721 170.229,205.104 170.229,205.68 169.654,206.063 168.887,206.254 169.271,206.638 169.462,206.446   172.912,210.277 172.912,211.427 172.912,211.427 172.529,213.918 173.87,215.835 173.487,218.135 173.295,218.326 173.295,218.518   173.679,219.093 174.062,219.285 173.487,219.668 172.912,220.243 171.379,222.159 171.379,222.734 171.379,222.926   172.912,226.759 173.487,226.95 174.062,226.375 174.445,225.992 174.637,225.992 176.17,225.226 177.895,224.65 178.849,224.267   179.811,223.884 180.766,223.309 181.344,223.117 181.916,222.734 184.023,222.351 184.215,224.65 184.407,225.8 184.79,226.567   184.79,227.142 183.64,230.015 182.877,230.015 182.682,230.015 181.728,230.015 181.149,230.781 180.961,230.973 180.766,231.165   180.194,232.123 179.999,232.698 179.999,232.89 179.999,233.081 179.044,234.806 178.661,235.189 177.699,236.339 177.895,237.105   177.895,237.297 177.895,238.064 177.895,238.255 178.083,238.447 178.661,238.831 179.044,238.831 179.428,238.639   180.382,239.022 180.766,238.831 181.344,239.597 181.149,240.172 180.578,241.897 179.616,242.855 179.428,243.43 179.044,244.388   178.083,244.58 176.745,244.963 176.17,244.771 176.17,245.538 176.933,246.113 176.553,246.496 175.403,246.305 175.211,246.688   174.637,247.071 174.637,247.263 173.87,247.646 173.295,248.221 172.912,247.838 172.337,247.646 171.762,247.838 171.187,248.221   169.846,248.988 169.271,249.946 168.504,251.288 168.504,251.288 168.313,251.479 167.546,252.054 166.587,251.862   166.204,251.862 166.396,252.438 166.396,253.012 166.013,253.779 165.821,254.354 165.629,254.354 165.246,254.545   164.671,254.545 162.755,254.737 161.605,253.587 159.88,247.263 159.305,246.879 159.113,246.879 158.922,247.646 158.73,247.838   158.347,248.413 157.772,248.796 157.772,248.796 157.005,248.988 155.855,248.988 155.664,248.796 155.089,247.646   154.706,247.071 154.706,246.879 154.706,246.879 153.172,247.838 152.789,248.029 152.214,248.413 151.831,248.604   150.873,249.371 149.723,250.521 143.782,253.204 143.398,252.054 143.207,251.862 142.824,251.479 142.249,250.521   141.099,250.904 140.524,251.671 139.374,252.438 137.266,253.012 137.074,252.821 136.882,252.629 136.882,252.438   136.882,251.862 136.116,249.946 134.774,248.029 134.774,246.879 134.199,246.305 134.199,246.113 133.816,245.729   133.816,245.538 133.433,245.155 133.433,244.963 133.245,244.58 132.862,243.813 132.666,243.047 133.049,241.897 131.9,240.938   131.329,241.13 130.367,241.897 130.367,241.897 129.983,242.472 128.454,243.43 128.07,243.43 127.879,244.388 127.687,245.155   126.729,244.771 125.579,244.388 123.471,244.196 123.471,243.43 123.471,242.855 124.046,242.088 123.471,241.514 122.896,241.13   122.513,240.938 122.513,239.98 123.471,239.405 123.854,238.831 124.238,237.872 124.238,237.681 124.238,237.297 124.238,236.531   124.429,235.381 124.238,232.89 123.854,230.973 122.513,230.59 121.746,230.398 120.788,230.398 120.405,230.781 120.021,231.165   119.446,231.74 119.255,231.931 118.296,230.207 118.105,230.015 117.913,229.631 116.188,229.25 115.039,228.867 114.847,228.675   114.847,228.483 114.847,227.717 114.847,227.525 115.422,227.142 116.188,226.567 116.38,226.759 116.38,226.375 115.997,225.609   116.38,225.417 116.763,225.226 117.146,224.076 117.53,223.692 118.105,223.309 119.063,222.159 "
      transform="translate(106.95522,19.462687)"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "white",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Seoul;
