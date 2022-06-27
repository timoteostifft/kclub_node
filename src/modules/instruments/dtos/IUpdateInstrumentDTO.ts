interface IUpdateInstrumentDTO {
  id: string,
  data: {
    name: string;
    amount: string;
  }
}

export { IUpdateInstrumentDTO }