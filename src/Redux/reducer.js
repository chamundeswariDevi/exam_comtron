const initialState = {
  data: [
    {
      name: "99AS",

      stationnum: "99",

      port: "1",

      prtype: "advantage",

      height: 1,

      width: 5,

      linetonext: 1,

      printbar: "Y",

      printname: "Y",

      printtest: "Y",

      pins: "bar128c",

      extra: 99,

      checksum: "Y",

      skip: "Y",

      indent: 11,

      labelType: "S",

      filler: "",

      recid: 20,
    },

    {
      name: "COIN",

      stationnum: "99",

      port: "1",

      prtype: "zebra",

      height: 1,

      width: 5,

      linetonext: 1,

      printbar: "Y",

      printname: "Y",

      printtest: "Y",

      pins: "bar39",

      extra: 99,

      checksum: "Y",

      skip: "Y",

      indent: 11,

      labelType: "SRC",

      filler: "",

      recid: 21,
    },
  ],
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "value":
      break;

    default:
      return {
        ...state,
      };
      break;
  }
};
