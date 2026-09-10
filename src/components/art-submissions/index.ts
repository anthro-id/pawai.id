export const endpoint: string =
  "https://canine.cdn.anthro.id/miscellaneous/pawai-2026-art-submissions/";

export interface SubmissionsProps {
  authorName: string;
  frontImageId: string;
  theme: "balinese" | "tropical";

  imageIds?: Array<string | ImageAlternativeProp>;
  authorUrl?: string;
  objectPosition?: string;
  zoom?: number;
};

export interface ImageAlternativeProp {
  proposedName: string;
  imageId: string;
  type?: "video";
};

const submissions: SubmissionsProps[] = [
  {
    authorName: "Ambrose",
    frontImageId: "f6e81fd3-6eae-4c34-943e-585e85f5d822",
    theme: "balinese"
  },
  {
    authorName: "Joseph A.K",
    authorUrl: "https://x.com/asumono_krom",
    frontImageId: "e4df89b7-a3b4-4028-ab11-1ee7dbe9e26f",
    theme: "balinese",
    objectPosition: "66%"
  },
  {
    authorName: "Auveiss",
    authorUrl: "https://x.com/auveiss",
    frontImageId: "88a740ad-bff2-4e35-a5fe-91b92e8811b8",
    theme: "balinese"
  },
  {
    authorName: "Goatcomp/Vyuga",
    authorUrl: "https://bsky.app/profile/vyuga.bsky.social",
    frontImageId: "1b08cb16-b3ff-4be9-aa87-e4db92b2621d",
    theme: "balinese",
    objectPosition: "17.5%"
  },
  {
    authorName: "Avalanch3r",
    frontImageId: "ae0f2a29-8661-44b4-ac09-1e130ae4a8f2",
    theme: "balinese"
  },
  {
    authorName: "ShortrooKaris",
    frontImageId: "94fb3436-7d65-405b-9d40-7e6238d136c0",
    theme: "balinese"
  },
  {
    authorName: "Spuds",
    frontImageId: "0df63eb9-1533-422c-9508-4b756aed2020",
    theme: "balinese"
  },
  {
    authorName: "Minnova",
    frontImageId: "bf7725f3-7a9c-4d7d-a80b-e221ba76961b",
    theme: "balinese"
  },
  {
    authorName: "Niftji (OROCKSEAL)",
    authorUrl: "https://linktr.ee/orockseal",
    frontImageId: "dc5f8c39-48bb-4ae0-beec-14ebe9e02192",
    theme: "tropical"
  },
  {
    authorName: "Brunomaxx",
    authorUrl: "https://instagram.com/brunomax_11",
    frontImageId: "63b4d8c3-246e-47fa-bc99-0e5acea642b7",
    theme: "balinese",
    objectPosition: "right"
  },
  {
    authorName: "Tyverus",
    frontImageId: "58d25614-49a5-4bf8-ba86-f89927d32e86",
    theme: "balinese"
  },
  {
    authorName: "Kotakon",
    authorUrl: "https://x.com/Kotakonn",
    frontImageId: "072e76c5-4b19-4554-8d65-ccc05274ab30",
    theme: "tropical",
    objectPosition: "75%"
  },
  {
    authorName: "Archy",
    frontImageId: "6de66202-ae78-41e5-8514-7cd07f975cba",
    theme: "balinese"
  },
  {
    authorName: "TaylaTaur",
    authorUrl: "https://x.com/TaylaTaur",
    frontImageId: "68208670-d8ee-4607-8733-dc1033ec4bad",
    objectPosition: "bottom",
    theme: "balinese",
    imageIds: [
      { proposedName: "TaylaTaur (Ruken)", imageId: "1a44c7cb-957c-43b6-a8d4-65640554933a" },
      "0bd940bc-c92c-4635-a20b-01ccd5257156"
    ]
  },
  {
    authorName: "Tambangwoof",
    frontImageId: "866e3aaa-ac75-4d35-b7c8-ffcc0428ee1d",
    theme: "balinese",
    objectPosition: "75%"
  },
  {
    authorName: "Citsy",
    authorUrl: "https://x.com/Citsy_404",
    frontImageId: "58e8aafd-0301-44d0-a127-f2225160ead1",
    theme: "tropical"
  },
  {
    authorName: "LeograndoArts",
    authorUrl: "https://x.com/leograndoa",
    frontImageId: "d5de0975-51dc-48cf-9213-1136be17c191",
    theme: "tropical",
    zoom: 1.25
  },
  {
    authorName: "TaroTyger",
    authorUrl: "https://instagram.com/taro_typer",
    frontImageId: "ab4091a4-f62a-44f1-9f6c-f8daf9482e73",
    theme: "balinese",
    objectPosition: "32.5%",
    imageIds: [
      {
        imageId: "55f226cd-466e-4fd2-93e7-dd5cb25795f9",
        proposedName: "TaroTyger (Markos)"
      }
    ]
  },
  {
    authorName: "Kamui_san_01 (EricSavior)",
    frontImageId: "48e05c4e-46bf-4ffe-a0c2-bf7dad5b0a77",
    theme: "balinese"
  },
  {
    authorName: "Litara",
    frontImageId: "8cfd1e49-8a53-45b8-8817-27acea54123f",
    theme: "tropical"
  },
  {
    authorName: "Daza",
    frontImageId: "0f21dec5-3a90-4b1a-b379-0b1229954051",
    theme: "balinese"
  },
  {
    authorName: "Dragonmom",
    frontImageId: "1edebedd-479a-45e4-a0bd-f0bab3fc411d",
    theme: "tropical"
  },
  {
    authorName: "Alexander Sam (Frizzy)",
    authorUrl: "https://instagram.com/alex_k3ve",
    frontImageId: "4b68d97f-82b8-47e4-a52e-97a6a6a20044",
    theme: "tropical"
  },
  {
    authorName: "Kokukokuboo",
    frontImageId: "c27f095f-3844-415a-af5c-eef0f566a7ba",
    theme: "balinese",
    objectPosition: "25%"
  },
  {
    authorName: "Ikanlele",
    frontImageId: "0d00448c-33be-4939-a9ac-1fd402871a17",
    theme: "balinese"
  },
  {
    authorName: "Strayed Grey",
    authorUrl: "https://x.com/strayedgrey",
    frontImageId: "1f8ff7d5-76ed-4d69-9daa-68d0a570ac12",
    theme: "balinese",
    objectPosition: "0 60%"
  },
  {
    authorName: "Syst",
    authorUrl: "https://x.com/S_S_Syst",
    frontImageId: "002a765e-bad4-4e3b-96ec-aeffda053d1e",
    theme: "tropical"
  },
  {
    authorName: "Áaron Álexanderssón",
    frontImageId: "2b865176-19de-488a-83a9-dae12d23719f",
    theme: "balinese",
    imageIds: [
      {
        imageId: "4eb941ca-bd10-444b-b4a8-dc0c3655b5ad",
        proposedName: "Astral Lake [Animated]",
        type: "video"
      },
      {
        imageId: "be321bc8-fb22-4061-8340-e3ee92a7b966",
        proposedName: "Áaron Álexanderssón, Kanjeng Citlali (Madnatdawg)"
      },
      {
        imageId: "e0ac4fd5-f5ec-40ed-a967-3d7726a659aa",
        proposedName: "Áaron Álexanderssón (Splash)"
      }
    ]
  },
  {
    authorName: "Zian Raizu",
    frontImageId: "d0866ee7-ea2c-4b12-aa90-83bdd8440880",
    theme: "balinese"
  },
  {
    authorName: "Zae Twinmark",
    frontImageId: "a7ff45ea-dae1-48ad-b020-5cf24f54489c",
    theme: "balinese"
  },
  {
    authorName: "Yuki Katsumi",
    frontImageId: "bca3391b-e9f9-49a8-b941-0091d69937fd",
    theme: "tropical"
  },
  {
    authorName: "Takahirosi",
    frontImageId: "2acb9d5b-8530-41d7-b1b3-33d4053afc07",
    theme: "balinese",
    imageIds: ["715cce28-6ca2-4bed-95c5-c94d5c606f17"]
  },
  {
    authorName: "Inafiru Choco",
    frontImageId: "7a153038-13fb-4e66-8af2-d49edbae91cc",
    theme: "tropical",
    objectPosition: "left"
  },
  {
    authorName: "Yukaru & Zafox",
    frontImageId: "41130eef-c0ff-4a53-bdcf-e17b094b3c83",
    theme: "tropical",
    objectPosition: "right"
  },
  {
    authorName: "Otto Von Oryx",
    frontImageId: "c35e7ebe-f158-4b1f-ac51-a1a94be9802e",
    theme: "balinese"
  },
  {
    authorName: "Soneza (Shiroi Dabo)",
    authorUrl: "https://x.com/Absok29",
    frontImageId: "c45d1d5b-334f-4843-8781-69dafb60784f",
    theme: "tropical",
    objectPosition: "75%"
  },
  {
    authorName: "Andi Serigala",
    frontImageId: "cadaab3b-6f3d-476c-90ad-e7a9e5a29c74",
    theme: "tropical",
    objectPosition: "center"
  },
  {
    authorName: "Red Namchaophraya",
    authorUrl: "https://bsky.app/profile/wahredpanda89997.bsky.social",
    frontImageId: "21f942f0-ce4c-4f0d-a974-1d9ea3725b16",
    theme: "tropical",
    imageIds: ["26cc1e93-4cd1-4692-8f9b-fd6b9d7f2185"],
    objectPosition: "75%"
  },
  {
    authorName: "Roukan Zayev",
    frontImageId: "53f88dbe-2e1b-470f-b0b5-404602e3a224",
    theme: "balinese"
  },
  {
    authorName: "Ruxiria",
    frontImageId: "09392c4c-bb2e-4110-8c52-41d914207f0e",
    theme: "tropical"
  },
  {
    authorName: "TeriZZZaki",
    frontImageId: "ae690ba1-4598-45b6-8989-0a527f6e1cfe",
    theme: "balinese"
  },
  {
    authorName: "Metrosaurus/Isaac",
    frontImageId: "cb15b88b-5fc1-4841-8d3c-17203d8f0ee8",
    theme: "tropical"
  },
  {
    authorName: "Rumsky",
    frontImageId: "4a93beb1-39e2-4169-99e0-dc4cf505fb9e",
    theme: "balinese",
    objectPosition: "66%"
  },
  {
    authorName: "Okami Takuya/Timberwolf Max",
    frontImageId: "305bd68a-ca6f-4512-aa27-1d34f3945d1b",
    theme: "balinese"
  },
  {
    authorName: "Mochi Octavian",
    frontImageId: "b2ff39e0-8a00-47cd-bdde-e0ae12dd3ab1",
    theme: "balinese"
  },
  {
    authorName: "Sugarcanne",
    authorUrl: "https://x.com/Sugarcanne",
    frontImageId: "b842f3b2-b28c-4062-9015-548b1207616e",
    theme: "balinese"
  },
  {
    authorName: "MasbroArt",
    authorUrl: "https://x.com/Masbro_Art",
    frontImageId: "a5b12c53-f45a-48c6-a2aa-be7bc4c89e13",
    theme: "balinese",
    objectPosition: "left"
  },
  {
    authorName: "Tdiamondragon",
    frontImageId: "dcaaa747-15b0-4201-847c-12fcfcc319eb",
    theme: "balinese"
  },
  {
    authorName: "Soendapuss",
    authorUrl: "https://x.com/soendapuss",
    frontImageId: "940427db-d62e-4159-a610-ca85ee6ed996",
    theme: "tropical",
    objectPosition: "0 25%"
  },
  {
    authorName: "Wolfie Canem",
    frontImageId: "92bcb10b-11c0-42bc-b28f-c0e722b1a6c9",
    theme: "balinese",
    objectPosition: "center"
  },
  {
    authorName: "Rei",
    frontImageId: "581f1c87-583d-40ec-b395-c2e580f161ff",
    theme: "balinese",
    objectPosition: "75%"
  },
  {
    authorName: "Matte Wolv",
    frontImageId: "6a3a24cf-ed9f-49f5-b94c-0632df0fda6d",
    theme: "balinese",
    objectPosition: "center"
  },
  {
    authorName: "Zetaxen",
    frontImageId: "6ee63e72-ca54-495f-8a84-3bf70c58e8b1",
    theme: "balinese"
  },
  {
    authorName: "Kimakkun",
    authorUrl: "https://x.com/kimakkun",
    frontImageId: "92a62a85-6300-46a0-be0d-185cab30da84",
    theme: "tropical"
  },
  {
    authorName: "Raixard",
    frontImageId: "ec61e865-1559-49c7-b0b1-a4f10fae0872",
    theme: "balinese"
  },
  {
    authorName: "Kyuuhari",
    frontImageId: "b70cb6da-14fa-4ff8-a40f-bd422371d08c",
    theme: "tropical"
  },
  {
    authorName: "Laito Starr",
    frontImageId: "5a3b932e-8abb-4cb8-96ea-19c25ffa0ae5",
    theme: "balinese",
    objectPosition: "37.5%"
  },
  {
    authorName: "Nara",
    frontImageId: "39d98e9f-a0fc-484a-b334-4076b42c08d0",
    theme: "tropical"
  },
  {
    authorName: "Wyzarudo",
    authorUrl: "https://linktr.ee/barawyz",
    frontImageId: "d4117f4d-1552-4be0-860b-bad69580f7b8",
    theme: "tropical",
    objectPosition: "0 2.5%"
  },
  {
    authorName: "Kenaozora1",
    frontImageId: "2be3b017-a144-4fda-a863-b9fd70a5b1ef",
    theme: "balinese",
    objectPosition: "75%"
  },
  {
    authorName: "Nami/ChesshireBacon",
    frontImageId: "23ccb8ac-8299-4e41-bb2e-546b76de6a84",
    theme: "tropical"
  },
  {
    authorName: "Dappaw",
    frontImageId: "4297485f-6ba5-4d74-86d3-4ec377999560",
    theme: "balinese"
  },
  {
    authorName: "Gabriel Nile",
    authorUrl: "https://instagram.com/nile.furry_art_0",
    frontImageId: "e76b85f0-9fdc-4b84-b8e9-84601ae0d07b",
    theme: "tropical",
    objectPosition: "25%"
  },
  {
    authorName: "Powree",
    frontImageId: "5e2f2f63-8707-40a0-b99b-ea1eb8cc46ac",
    theme: "balinese"
  },
  {
    authorName: "Zicozoroark",
    frontImageId: "7bfaf998-9a0b-423b-af8a-9c4f415cc840",
    theme: "balinese",
    objectPosition: "bottom"
  },
  {
    authorName: "Kichirou Ogami",
    frontImageId: "208de65c-d482-4a12-90b7-8f0f6d4b844f",
    theme: "tropical"
  },
  {
    authorName: "Glackeywacky",
    frontImageId: "bfa35828-3398-4eae-add0-d82f27f4ec9a",
    theme: "balinese"
  },
  {
    authorName: "ReduxBlack",
    frontImageId: "462a214b-0e75-41be-8768-6bf0a7446ee8",
    theme: "balinese",
    objectPosition: "center"
  },
  {
    authorName: "Abang Fatih",
    frontImageId: "06d256b3-e0a7-416f-882d-1c5ee5bdeed7",
    theme: "balinese"
  }
];

export default submissions;