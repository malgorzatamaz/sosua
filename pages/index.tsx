import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import { Text, StyleSheet, View } from "react-native";

export default function App(props) {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <View style={styles.comming}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="486"
            height="151"
            fill="none"
            viewBox="0 0 486 151"
          >
            <path
              fill="#FDC30E"
              d="M138.085 114.114a93.892 93.892 0 00-2.322 2.478c-.779.862-1.186 2.076-1.497 2.645.157 2.791 1.234 4.29 3.12 5.163 1.864.841 3.595.47 5.032-.97a379.78 379.78 0 007.065-7.231c.787-.833 1.244-1.772 1.37-2.711.184-1.412-.331-2.842-1.535-4.026-2.02-1.979-4.634-1.979-6.686.067-1.525 1.518-3.051 3.027-4.547 4.585zm-3.295-.715a334.18 334.18 0 007.104-7.367c.797-.84 1.175-2.076 1.516-2.693-.224-2.713-1.303-4.212-3.168-5.093-1.71-.814-3.625-.43-5.024.99a1156.822 1156.822 0 00-9.62 9.853c-.038.039-.079.076-.117.118-1.972 2.046-1.904 4.701.127 6.719 1.982 1.968 4.604 2.057 6.578.089.876-.874 1.74-1.744 2.604-2.616zm-7.413-24a1574.329 1574.329 0 00-10.416 10.668c-.495.499-.982 1.01-1.467 1.508-1.059 1.098-1.719 2.43-1.75 3.243-.037 3.575 2.206 5.592 4.985 5.278 1.565-.177 2.788-.988 3.849-2.077.233-.232.467-.469.699-.703 3.527-3.595 7.073-7.19 10.542-10.853a8.8 8.8 0 001.925-3.243c.874-2.703-.982-5.348-3.782-5.642-1.836-.196-3.341.57-4.585 1.82zm-11.922 7.965a309.407 309.407 0 008.978-9.208c1.789-1.91 1.526-4.593-.389-6.427-.145-.136-.29-.263-.436-.391 1.312.294 2.614.646 3.886 1.038.127.04.253.079.379.128.32.851.564 1.742.865 2.645 2.235-.893 4.275-.736 6.112.294a9.208 9.208 0 011.769 1.321c2.351 2.214 2.594 5.035 1.836 8.013 5.938 1.332 8.076 4.231 7.61 10.197 4.847 1.058 6.189 2.362 7.734 7.436.01.039.029.077.038.117.136.324.448.625.729.841 1.992 1.579 4.839 1.274 6.694-.664 1.361-1.424 1.605-3.057.652-4.762a6.871 6.871 0 00-.844-1.195c-3.703-4.241-7.483-8.424-11.224-12.636-.437-.5-.922-.99-1.322-1.519 1.302.364 2.711.647 4.178.835.184.029.379.046.563.068 3.663 4.143 7.326 8.278 11.009 12.411.058.058.107.126.165.187 1.536 1.724 3.519 2.126 5.528 1.155 1.943-.93 3.12-2.822 2.643-4.899-.272-1.186-.942-2.38-1.72-3.34a21.348 21.348 0 00-.758-.9c-1.36-1.626-2.827-3.165-4.246-4.741a63.527 63.527 0 003.207-.452c.108-.02.215-.028.32-.048.691.744 1.361 1.5 2.041 2.243.02.019.039.039.049.058.69.745 1.418 1.305 2.264 1.578.7.225 1.468.255 2.323.02 2.807-.765 4.198-3.508 3.41-6.043 7.61-1.97 15.916-4.83 25.361-8.739v5.037h-.097a63.162 63.162 0 01-1.721 11.52c-6.675 27.182-31.035 47.322-60.058 47.322-29.025 0-53.384-20.14-60.06-47.323a63.292 63.292 0 01-1.72-11.52h-.097v-4.927c.03-.01.058-.01.088-.02 6.841-1.323 13.44-2.146 19.608-2.44.108 0 .215-.01.322-.01 1.35 1.902 2.847 3.713 4.43 5.487.573.645 1.185 1.252 1.807 1.91h.786c.194-.216.379-.412.554-.598 1.176-1.185 2.331-2.4 3.498-3.595.961-.97 1.915-1.939 2.905-2.87.136.01.273.029.409.038a72.74 72.74 0 013.779.5 4.663 4.663 0 00-1.613 1.068 381.87 381.87 0 00-5.305 5.298c-.058.06-.127.118-.176.187a394.048 394.048 0 00-4.557 4.672c-1.4 1.45-1.75 3.222-.855 5.084.329.695.739 1.272 1.262 1.733.894.795 2.119 1.245 3.818 1.303.475-.235 1.594-.5 2.293-1.194.44-.422.869-.853 1.296-1.284zM272.107 83.262c1.119 2.597 1.681 5.731 1.681 9.394 0 4.067-.698 7.868-2.099 11.404-1.399 3.545-3.418 6.63-6.073 9.265-2.661 2.635-5.937 4.714-9.823 6.22-3.896 1.509-8.318 2.263-13.263 2.263-2.721 0-5.479-.283-8.298-.842a49.245 49.245 0 01-8.172-2.389 46.548 46.548 0 01-7.424-3.643c-2.312-1.411-4.333-2.979-6.043-4.712l5.986-9.541a6.004 6.004 0 011.885-1.713 4.804 4.804 0 012.546-.697c1.194 0 2.401.383 3.624 1.148 1.215.762 2.595 1.605 4.13 2.534 1.534.923 3.304 1.774 5.296 2.539 2.001.763 4.353 1.145 7.074 1.145 3.662 0 6.52-.823 8.56-2.449 2.031-1.626 3.051-4.21 3.051-7.758 0-2.047-.563-3.72-1.681-5.005-1.117-1.293-2.584-2.36-4.393-3.202-1.817-.844-3.886-1.589-6.198-2.235a187.061 187.061 0 01-7.132-2.145 50.894 50.894 0 01-7.123-2.9 22.01 22.01 0 01-4.548-2.987c9.008-1.763 17.812-2.773 25.876-2.341a127.728 127.728 0 0118.434 2.34c1.698 1.753 3.068 3.849 4.127 6.307zM67.831 84.242c.864 2.39 1.293 5.201 1.293 8.414 0 4.067-.7 7.868-2.088 11.404-1.399 3.545-3.431 6.63-6.083 9.265-2.652 2.635-5.927 4.714-9.824 6.22-3.887 1.509-8.307 2.263-13.264 2.263-2.711 0-5.47-.283-8.288-.842a48.951 48.951 0 01-8.171-2.389 46.457 46.457 0 01-7.424-3.643c-2.323-1.411-4.333-2.979-6.054-4.712l5.995-9.541a5.901 5.901 0 011.884-1.713 4.803 4.803 0 012.546-.697c1.196 0 2.4.383 3.614 1.148 1.224.762 2.595 1.605 4.14 2.534 1.535.923 3.293 1.774 5.296 2.539 1.992.763 4.353 1.145 7.063 1.145 3.673 0 6.53-.823 8.56-2.449 2.042-1.626 3.062-4.21 3.062-7.758 0-2.047-.563-3.72-1.68-5.005a11.745 11.745 0 00-1.983-1.802 729.702 729.702 0 0121.406-4.381zM461.218 72.585l18.532 48.263h-15.685c-1.758 0-3.176-.422-4.255-1.245a7.779 7.779 0 01-2.449-3.164l-5.147-15.339H419.04l-5.15 15.339c-.447 1.127-1.235 2.136-2.371 3.048-1.138.9-2.544 1.361-4.219 1.361h-15.808l16.499-42.954c6.51-1.037 13.166-2.047 19.813-2.909l-4.1 12.235h23.895l-4.655-13.861c6.225-.52 12.359-.813 18.274-.774zM387.954 81.108v3.879c0 5.397-.865 10.343-2.605 14.849-1.728 4.505-4.215 8.395-7.452 11.65-3.235 3.259-7.161 5.799-11.795 7.608-4.635 1.812-9.842 2.714-15.626 2.714-5.83 0-11.056-.902-15.691-2.714-4.637-1.809-8.561-4.349-11.797-7.608-3.236-3.255-5.702-7.144-7.423-11.65-1.72-4.505-2.578-9.452-2.578-14.85v-5.358c6.492 1.38 13.139 2.733 20.243 3.692v1.607c0 3.096.386 5.867 1.165 8.296.776 2.44 1.904 4.508 3.381 6.22 1.478 1.715 3.285 3.019 5.423 3.929 2.138.901 4.557 1.351 7.276 1.351 2.713 0 5.141-.45 7.268-1.351 2.138-.91 3.947-2.203 5.424-3.898 1.475-1.686 2.602-3.752 3.382-6.19.776-2.43 1.164-5.203 1.164-8.298v-1.127c6.308-.646 13.128-1.636 20.241-2.751z"
            ></path>
            <path
              fill="#1A3764"
              d="M168.634 92.006c-3.158-3.487-6.315-6.965-9.473-10.462-.624-.695-1.206-1.263-2.118-.508-.875.723-.855 1.469-.107 2.302a2324.78 2324.78 0 018.133 9.13c.135.146.271.304.407.45.048.048.098.108.145.157l.263.294a63.641 63.641 0 003.207-.452c.108-.02.215-.028.32-.048a14.956 14.956 0 00-.388-.43c-.126-.149-.262-.287-.389-.433zM152.261 92.359c-.398-.431-.785-.873-1.166-1.304-.282-.324-.554-.647-.864-.95-.631-.598-1.428-.628-1.905.01-.234.304-.359.851-.32 1.312 0 .185.039.352.107.49l.029.058c.107.215.243.423.379.616 1.302.364 2.711.647 4.178.835.184.029.379.046.563.068l-.494-.558c-.176-.195-.35-.382-.507-.577zM127.347 81.309c-2.243-4.144-7.666-5.3-11.28-2.243a6.606 6.606 0 00-.497.44c-.155.148-.31.295-.466.451.136.011.273.03.409.04 1.253.126 2.516.303 3.779.499h.01c.426.069.854.148 1.272.216a76.553 76.553 0 013.032.626c1.312.294 2.614.646 3.885 1.038.128.04.254.079.38.128a6.465 6.465 0 00-.232-.597 6.656 6.656 0 00-.292-.598z"
            ></path>
            <path
              fill="#1A3764"
              d="M203.041 52.461c-6.675-27.182-31.035-47.323-60.058-47.323-29.025 0-53.384 20.14-60.06 47.323a62.3 62.3 0 00-1.769 12.655h-.048V82.09c.03-.011.058-.011.088-.02 6.841-1.323 13.44-2.146 19.608-2.44.108 0 .215-.01.322-.01-.118-.156-.225-.313-.341-.48l-.32-.47a37.519 37.519 0 01-3.352-5.947 31.657 31.657 0 01-2.03-6.112c-.107-.499-.204-1-.283-1.498-.719-4.467-.203-8.806 1.322-12.655 2.925-7.465 9.61-13.116 18.374-14.419 5.54-.823 10.815-.431 15.821 1.195 3.313 1.068 6.5 2.683 9.551 4.848.175.118.33.256.652.51-2.022 1.47-3.965 2.88-5.909 4.281-6.879 4.995-14.225 9.109-21.843 12.724-.184.098-.37.186-.564.274a234.238 234.238 0 01-7.2 3.242c-.535.226-1.058.45-1.594.675-1.127.47-2.283.96-3.304 1.627-1.865 1.234-2.4 3.016-1.573 4.682.252.51.63.998 1.137 1.46 1.952 1.782 4.391 2.556 6.917 3.026a23.79 23.79 0 005.616.374c2.789-.158 5.52-.815 8.192-1.99 4.761-2.086 9.639-3.8 14.751-4.79 5.217-1.019 10.29-.48 15.304 1.185 4.654 1.558 9.406 2.234 14.303 1.46.398-.068 1.011.186 1.263.499 2.594 3.194 5.188 6.397 7.753 9.61a328.376 328.376 0 013.256 4.084c.524.656 1.039 1.313 1.563 1.978.204.266.389.54.536.813.076.149.155.305.213.452.068.147.116.303.165.46 7.61-1.969 15.916-4.83 25.361-8.738V65.117h-.048a62.588 62.588 0 00-1.772-12.656zm-29.277 25.84c-1.67-2.076-3.322-4.133-5.003-6.22.515-.157.903-.284 1.301-.402.875-.265 1.478-.784 1.235-1.773-.252-.999-.961-1.244-1.973-1.048-2.497.5-4.994 1.028-7.51 1.293-3.382.362-6.724-.235-9.892-1.38-8.133-2.95-16.178-2.46-24.195.333-3.118 1.087-6.199 2.311-9.27 3.536-2.089.813-4.169 1.302-6.258 1.43-2.546.175-5.111-.168-7.685-1.04-.68-.235-1.37-.509-1.953-.91-.555-.392-.972-.99-1.448-1.499.523-.46.98-1.077 1.584-1.352 3.109-1.41 6.227-2.771 9.337-4.153h.165v-.069c.039-.01.068-.029.098-.048a302.243 302.243 0 005.752-2.586c7.833-3.614 15.042-8.268 21.853-13.556 4.246-3.282 8.503-6.582 13.526-8.61a33.908 33.908 0 012.458-.902c6.763-2.243 13.701-2.498 20.571-.098 6.812 2.37 11.613 7.22 13.876 13.215 1.458 3.859 1.865 8.199 1.078 12.655a28.489 28.489 0 01-1.264 4.701c-1.798 4.957-4.498 9.374-7.977 13.312-.748.852-1.467 1.724-2.322 2.724-2.07-2.567-4.082-5.074-6.084-7.553zM237.65 50.429c1.857-1.627 4.675-2.45 8.474-2.45 2.197 0 4.149.294 5.871.882 1.71.578 3.234 1.235 4.575 1.96 1.342.724 2.536 1.38 3.595 1.958 1.059.588 2.042.882 2.965.882 1.041 0 1.883-.245 2.544-.724.652-.48 1.282-1.205 1.886-2.175l5.023-9.483a29.851 29.851 0 00-5.297-3.889 39.271 39.271 0 00-6.373-2.958 40.88 40.88 0 00-7.219-1.87 47.71 47.71 0 00-7.812-.637c-4.792 0-9.048.735-12.759 2.204-3.713 1.47-6.841 3.429-9.397 5.887-2.555 2.46-4.489 5.25-5.81 8.395-1.313 3.134-1.974 6.358-1.974 9.658 0 4.105.554 7.553 1.673 10.344 1.116 2.801 2.584 5.133 4.401 7.003a23.588 23.588 0 001.651 1.539c9.007-1.763 17.811-2.773 25.876-2.341a127.746 127.746 0 0118.434 2.34 4.61 4.61 0 00-.274-.294c-.33-.332-.671-.646-1.019-.959a23.93 23.93 0 00-5.21-3.507 63.324 63.324 0 00-7.151-3.056 161.82 161.82 0 00-7.16-2.35c-2.332-.705-4.413-1.479-6.219-2.322-1.817-.842-3.285-1.851-4.402-3.017-1.116-1.165-1.681-2.634-1.681-4.407.001-2.784.933-4.988 2.789-6.613zM32.988 50.429c1.855-1.627 4.682-2.45 8.472-2.45 2.196 0 4.15.294 5.87.882 1.72.578 3.245 1.235 4.586 1.96 1.33.724 2.527 1.38 3.585 1.958 1.06.588 2.05.882 2.963.882 1.04 0 1.896-.245 2.546-.724.661-.48 1.292-1.205 1.886-2.175l5.033-9.483a29.839 29.839 0 00-5.296-3.889 39.397 39.397 0 00-6.384-2.958 40.818 40.818 0 00-7.21-1.87 47.712 47.712 0 00-7.812-.637c-4.791 0-9.046.735-12.759 2.204-3.711 1.47-6.85 3.429-9.406 5.887-2.546 2.46-4.49 5.25-5.801 8.395-1.321 3.134-1.982 6.358-1.982 9.658 0 4.105.564 7.553 1.682 10.344 1.118 2.801 2.583 5.133 4.402 7.003a22.419 22.419 0 006.199 4.526 50.276 50.276 0 007.123 2.9c2.44.784 4.81 1.498 7.123 2.145 2.322.645 4.381 1.39 6.198 2.235.438.204.864.42 1.263.656.409.235.787.479 1.156.745a737.586 737.586 0 0121.406-4.38 12.738 12.738 0 00-.359-.929c-.01-.02-.01-.03-.02-.05-1.116-2.595-2.583-4.79-4.4-6.602a23.924 23.924 0 00-6.23-4.466 63.413 63.413 0 00-7.15-3.055 166.21 166.21 0 00-7.163-2.351c-2.332-.705-4.411-1.479-6.228-2.322-1.816-.842-3.285-1.85-4.402-3.016-1.118-1.166-1.67-2.635-1.67-4.408 0-2.786.922-4.99 2.779-6.615zM460.839 71.596l-14.855-38.702h-20.718l-16.878 43.942-.399 1.058c6.51-1.037 13.166-2.047 19.813-2.909l.338-1.019 3.587-10.706c.603-1.538 1.235-3.34 1.913-5.436a90.756 90.756 0 001.915-6.817 173.44 173.44 0 002.041 6.728c.679 2.069 1.322 3.87 1.915 5.398l3.108 9.268.322.959c6.226-.52 12.361-.814 18.276-.773l-.378-.991zM367.713 82.88v.98c6.308-.647 13.128-1.637 20.24-2.753V32.894h-20.24V82.88zM312.987 78.63v.998c6.492 1.38 13.139 2.733 20.243 3.692V32.894h-20.243V78.63z"
            ></path>
          </svg>
          <Text style={styles.titleText}>
            Tu powstaje kompleksowa platforma pomocy dla Ukrainy
          </Text>
        </View>
      </CompositionContainer>
    </CompositionAppBody>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  comming: {
    textAlign: "center",
    marginTop: "30vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

/**
 * Temporary dumy data
 * TODO: api/getAccommodations
 */
