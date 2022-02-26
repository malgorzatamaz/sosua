import { Input, ChoiceButton } from "../src/components/Forms";
import {
  CompositionAppBody,
  CompositionContainer,
  CompositionSection,
  CompositionGrid,
} from "../src/components/Compositions";
import { Text } from "react-native";
import { lenguageTextSwitcher } from "../src/helpers";

export default function HostRegisterForm(props) {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <CompositionSection padding={[8, 40, 35, 40]}>
          <Input placeholder="imię" />
          <Input placeholder="e-mail" />
          <Input placeholder="miejscowość" />
        </CompositionSection>
        <CompositionSection
          backgroundColor="#F5F4F4"
          padding={[35, 40, 35, 40]}
        >
          <Text>
            {lenguageTextSwitcher([
              {
                locale: "ua-UA",
                text: "(UA) Określ swoje preferencje, kogo chcesz przyjąć:я",
              },
              {
                locale: "pl-PL",
                text: "Określ swoje preferencje, kogo chcesz przyjąć:",
              },
              {
                locale: "ru-RU",
                text: "(RU) Określ swoje preferencje, kogo chcesz przyjąć:",
              },
            ])}
          </Text>
          <CompositionGrid spaceing={[16, 16]} itemsPerRow={2} disableRwd>
            {hostPreferences.map((hostPreference: HostPreferenceData) => {
              return (
                <ChoiceButton
                  text={hostPreference.text}
                  icon={hostPreference.icon}
                />
              );
            })}
          </CompositionGrid>
        </CompositionSection>
      </CompositionContainer>
    </CompositionAppBody>
  );
}

/**
 * Temporary dumy data
 * TODO: destiny API
 */
import type { LenguageText } from "../src/helpers/lenguageTextSwitcher";
export type HostPreferenceData = {
  id: string;
  text: LenguageText;
  icon?: React.ReactNode;
};

export type HostPreferencesData = Array<HostPreferenceData>;

const hostPreferences: HostPreferencesData = [
  {
    id: "hostPreference_1",
    text: [
      { locale: "ua-UA", text: "домашні тварини вітаються" },
      { locale: "pl-PL", text: "zwierzęta mile widziane" },
      { locale: "ru-RU", text: "домашние животные приветствуются" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="25"
        fill="none"
        viewBox="0 0 30 25"
      >
        {" "}
        <path
          fill="#1C1B1F"
          fillOpacity="0.5"
          fillRule="evenodd"
          d="M11.118.08C9.723.39 8.573 1.416 8.024 2.846a5.546 5.546 0 00-.066 3.715c.247.712.565 1.214 1.121 1.772.583.583.952.829 1.574 1.046.54.188 1.46.237 2.014.107 1.608-.378 2.847-1.733 3.264-3.573.15-.656.125-1.782-.053-2.457C15.26 1.118 13.16-.371 11.117.08zm1.642 1.826c.69.34 1.26 1.088 1.488 1.951.127.482.128 1.364 0 1.847-.234.893-.805 1.645-1.51 1.99-.303.147-.39.163-.894.163s-.59-.016-.893-.164c-.662-.323-1.242-1.074-1.486-1.922-.14-.483-.149-1.368-.02-1.866.274-1.068 1.059-1.97 1.89-2.169.426-.102 1.014-.032 1.425.17zm7.512.382c-1.655.262-3.062 1.63-3.547 3.444-.167.623-.17 1.72-.005 2.329.474 1.76 1.824 2.86 3.5 2.851 1.748-.008 3.28-1.243 3.946-3.181.183-.533.187-.565.186-1.468-.001-.842-.014-.96-.145-1.352-.419-1.248-1.351-2.192-2.499-2.53-.371-.11-1.055-.154-1.436-.093zm1.192 1.795c.762.331 1.244 1.169 1.244 2.162 0 .563-.085.923-.343 1.453-.29.595-.756 1.083-1.269 1.326-.335.159-.422.176-.902.176-.603 0-.785-.065-1.198-.43-.335-.295-.625-.888-.705-1.446-.217-1.493.86-3.154 2.171-3.351.389-.059.69-.026 1.002.11zM3.315 5.623c-2.062.5-3.143 2.889-2.328 5.14.465 1.284 1.48 2.287 2.703 2.673.548.174 1.404.173 1.964 0 .813-.253 1.541-.887 1.949-1.697.324-.646.434-1.19.402-2.006-.022-.595-.053-.78-.203-1.224-.259-.767-.557-1.242-1.146-1.829-.41-.406-.603-.552-.987-.742-.774-.382-1.615-.495-2.354-.316zm1.56 1.79c.177.086.461.297.63.469 1.175 1.186 1.104 3.2-.135 3.852-.24.127-.352.15-.731.147-.377-.002-.495-.027-.754-.16a2.43 2.43 0 01-.991-.87c-.345-.514-.485-.98-.487-1.623-.002-.589.088-.911.374-1.33.444-.655 1.328-.86 2.093-.485zM25.192 9.65c-.215.047-.645.21-.956.36-1.48.719-2.48 2.299-2.477 3.916 0 1.052.312 1.837.998 2.52.715.71 1.44.982 2.491.931.694-.033 1.18-.173 1.808-.522.485-.27 1.31-1.094 1.615-1.615.723-1.232.813-2.704.239-3.86-.278-.558-.563-.891-1.05-1.224a3.496 3.496 0 00-2.668-.506zm-12.402.636a6.916 6.916 0 00-3.237 1.476c-.746.607-1.135 1.129-2.945 3.954-.955 1.492-1.808 2.864-1.894 3.049-.525 1.123-.523 2.573.006 3.705.57 1.22 1.632 2.09 2.962 2.427.398.1.582.115 1.199.093.632-.022.79-.048 1.203-.197 2.153-.776 2.379-.823 3.882-.822.94.001 1.207.021 1.686.125.546.119.767.189 2.084.659.53.189.653.211 1.284.233 1.003.036 1.69-.132 2.5-.61.45-.264 1.175-1.003 1.464-1.49.394-.666.569-1.261.602-2.053.033-.772-.055-1.315-.31-1.923-.142-.34-2.591-4.238-3.535-5.63-.34-.5-1.017-1.24-1.475-1.61-1.453-1.178-3.59-1.719-5.476-1.386zm13.697 1.038c.164.05.387.178.537.31 1.14 1.005.549 3.147-1.078 3.906-.26.122-.388.144-.837.146-.458.002-.569-.017-.804-.137a1.627 1.627 0 01-.766-.892c-.152-.404-.126-1.162.056-1.617.512-1.278 1.797-2.041 2.892-1.716zm-11.256.694c1.197.31 2.243 1.004 2.943 1.953.48.653 3.311 5.112 3.514 5.537.163.34.2.488.223.895.049.858-.146 1.434-.68 2.01-.64.694-1.237.944-2.146.898-.475-.023-.619-.058-1.2-.287-1.356-.532-2.422-.734-3.891-.734-1.542-.001-2.593.195-3.966.74-.564.223-.708.257-1.181.281-.445.023-.608.007-.934-.093a2.834 2.834 0 01-1.746-1.61c-.11-.277-.13-.427-.131-.997-.001-.598.014-.708.142-1.007.148-.347 3.18-5.127 3.606-5.685.802-1.051 2.065-1.796 3.4-2.005.5-.078 1.55-.025 2.046.104z"
          clipRule="evenodd"
        ></path>{" "}
      </svg>
    ),
  },
  {
    id: "hostPreference_2",
    text: "dzieci poniźej 2 lat",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="25"
        fill="none"
        viewBox="0 0 26 25"
      >
        {" "}
        <path
          fill="#1C1B1F"
          fillOpacity="0.5"
          fillRule="evenodd"
          d="M19.468.07c-1.22.222-2.36.87-3.116 1.774-.405.484-.552.738-.996 1.728-.7 1.559-1.708 3.271-2.831 4.808l-.331.455c-.005.008-.325-.224-.711-.515-1.754-1.325-3.2-2.116-4.512-2.467-.567-.152-1.407-.15-1.8.004-.835.328-1.26 1.193-1.118 2.272.112.846.617 2.09 1.31 3.228.146.24.248.45.227.47-.022.018-.15.063-.284.099-.426.113-1.055.386-1.513.657-1.645.976-2.748 2.515-3.168 4.425-.137.623-.148 1.92-.02 2.555a6.728 6.728 0 001.932 3.565 6.643 6.643 0 003.416 1.783c.599.119 1.884.119 2.473 0a6.769 6.769 0 004.54-3.229c.234-.4.546-1.13.628-1.472a1.23 1.23 0 01.093-.282c.018-.02.236.084.484.234 1.163.701 2.37 1.188 3.224 1.301.83.11 1.459-.078 1.909-.571.368-.403.467-.7.465-1.391 0-.417-.029-.664-.106-.956-.35-1.31-1.14-2.758-2.45-4.491l-.552-.729.115-.09a43.675 43.675 0 011.923-1.314c1.197-.752 2.434-1.413 3.462-1.85 1.681-.715 2.745-1.916 3.197-3.61.111-.418.127-.57.127-1.258 0-.69-.015-.84-.13-1.27A5.35 5.35 0 0023.301.953C22.216.182 20.736-.159 19.468.071zm1.787 1.545c.987.25 1.863.958 2.357 1.909.516.99.534 2.302.046 3.275-.46.916-1.089 1.486-2.124 1.922-2.293.967-5.686 3.143-7.271 4.664l-.234.224-1.055-1.056-1.055-1.055.49-.57c1.528-1.776 3.3-4.508 4.139-6.385.625-1.397.832-1.722 1.386-2.18a3.683 3.683 0 013.321-.748zM6.968 7.398c1.022.347 2.53 1.247 3.971 2.368l.306.238-.292.33c-.42.476-.515.694-.512 1.175.004.604.06.683 1.521 2.132 1.407 1.396 1.467 1.438 2.07 1.435.415-.002.757-.16 1.165-.537.17-.157.323-.265.341-.24.018.026.24.321.492.657 1.442 1.916 2.246 3.522 2.263 4.52.004.27-.012.343-.098.428-.252.252-1.264.028-2.36-.523C12.408 17.658 8 13.287 6.238 9.863c-.483-.938-.665-1.462-.699-2.009-.023-.374-.014-.441.066-.53.084-.093.133-.1.533-.081.304.015.56.063.83.155zm-.1 6.125c1.138 1.509 3.616 3.986 5.125 5.124.374.282.381.309.233.927-.352 1.467-1.41 2.778-2.765 3.428a5.23 5.23 0 01-5.191-.356c-.374-.247-.947-.794-1.249-1.19-.316-.415-.74-1.29-.868-1.791a5.225 5.225 0 012.022-5.563c.651-.464 1.732-.891 2.28-.9.154-.002.194.028.414.32z"
          clipRule="evenodd"
        ></path>{" "}
      </svg>
    ),
  },
  {
    id: "hostPreference_3",
    text: "zapewniam wyżywieniet",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="25"
        fill="none"
        viewBox="0 0 26 25"
      >
        {" "}
        <path
          fill="#1C1B1F"
          fillOpacity="0.3"
          fillRule="evenodd"
          d="M12.56.015c-.566.145-1.14.558-1.517 1.092-.484.685-.679 1.339-.716 2.406l-.026.743-.348.116c-1.47.491-3.181 1.697-4.459 3.145-1.73 1.96-2.994 4.611-3.578 7.503-.168.83-.345 2.187-.345 2.64v.305h-.246c-.343 0-.604.188-.737.53-.093.238-.101.337-.075.85.132 2.609 1.523 4.796 3.5 5.506l.415.149h17.046l.397-.14c1.856-.652 3.164-2.429 3.54-4.807.12-.768.119-1.253-.006-1.576a.76.76 0 00-.73-.512h-.247V17.7c0-.44-.14-1.583-.299-2.434a17.766 17.766 0 00-2.19-5.814c-1.065-1.769-2.806-3.51-4.393-4.39-.588-.328-1.36-.674-1.67-.75l-.177-.043-.025-.75c-.038-1.13-.28-1.875-.832-2.56-.499-.62-1.03-.914-1.72-.951-.242-.013-.495-.01-.562.007zm.855 1.994c.468.21.806.863.806 1.56v.293h-2.442V3.57c0-1.154.813-1.929 1.636-1.56zm1.148 3.908c3.89.85 7.065 4.588 8.085 9.516.149.716.315 1.924.315 2.283v.249H3.036v-.241c0-.386.138-1.404.293-2.174.563-2.79 1.86-5.337 3.61-7.09 1.407-1.408 3.092-2.31 4.88-2.61.653-.11 2.098-.074 2.744.067zm9.353 14.12a8.61 8.61 0 01-.226.677c-.36.976-1.07 1.788-1.904 2.17l-.41.189-8.266.017c-7.186.015-8.311.004-8.62-.08-.903-.244-1.78-1.138-2.178-2.218-.11-.3-.215-.626-.232-.723l-.031-.177h21.898l-.03.145z"
          clipRule="evenodd"
        ></path>{" "}
      </svg>
    ),
  },
  {
    id: "hostPreference_4",
    text: "osoby niepełnosprawne",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
        viewBox="0 0 24 25"
      >
        {" "}
        <path
          fill="#1C1B1F"
          fillOpacity="0.3"
          fillRule="evenodd"
          d="M7.433.064a2.148 2.148 0 00-.775.339C5.764.976 5.321 2.08 5.581 3.09c.18.698.683 1.323 1.296 1.61.22.102.346.192.36.255.013.054.31 1.955.66 4.225.69 4.474.673 4.401 1.02 4.635.091.062.245.134.342.16.111.032 1.538.05 3.845.05h3.668l1.139 3.655c.626 2.01 1.17 3.719 1.209 3.796.093.188.291.37.498.457.35.149.536.103 2.03-.495.774-.31 1.46-.614 1.526-.676.344-.32.407-.906.142-1.307-.155-.235-.537-.441-.813-.44-.097 0-.54.146-1.017.337-.558.223-.853.318-.867.28-.012-.031-.513-1.635-1.113-3.563-.8-2.567-1.127-3.552-1.22-3.675a1.118 1.118 0 00-.34-.27c-.21-.102-.253-.103-3.9-.103h-3.69l-.133-.893c-.075-.49-.147-.94-.16-1l-.026-.108 2.121-.014 2.122-.014.236-.147c.643-.399.616-1.361-.049-1.728-.128-.071-.427-.084-2.44-.106l-2.294-.024-.257-1.661c-.212-1.373-.245-1.668-.19-1.7.423-.236.853-.765 1.059-1.301.13-.34.174-.959.094-1.342C10.302 1.324 9.802.65 9.194.31 8.672.019 7.987-.077 7.434.064zm-2.47 8.99c-.096.036-.36.187-.586.335-2.07 1.354-3.409 3.44-3.784 5.898-.097.635-.096 1.86.002 2.48.292 1.847 1.099 3.446 2.394 4.742 1.317 1.318 2.923 2.133 4.786 2.426.61.097 2.052.083 2.638-.024a8.727 8.727 0 002.809-1.02c.738-.424 1.17-.76 1.807-1.403a7.854 7.854 0 001.524-2.094c.275-.538.306-.63.303-.88-.005-.326-.095-.525-.33-.732a.985.985 0 00-1.22-.079c-.16.113-.261.255-.472.663-.361.698-.68 1.156-1.145 1.643a6.53 6.53 0 01-3.35 1.875c-.67.148-1.9.16-2.533.025-1.339-.285-2.409-.843-3.317-1.73-1.317-1.288-1.973-2.856-1.971-4.71.001-1.306.358-2.462 1.118-3.616.36-.548 1.18-1.36 1.746-1.73.602-.394.746-.54.835-.846.09-.312.057-.524-.13-.819-.229-.361-.742-.546-1.124-.404z"
          clipRule="evenodd"
        ></path>{" "}
      </svg>
    ),
  },
];