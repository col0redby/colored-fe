export enum ValidatorReg {
  Password = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
  Name = '^[A-Za-zА-Яа-я]+$'
}
