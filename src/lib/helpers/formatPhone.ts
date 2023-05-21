export function formatPhone(phone: string) {
  switch (phone?.length) {
    case 10:
      return phone.replace(/(\d{3})(\d{3})(\d{4})(\d{2})/, '$1 $2 $3');
    case 12:
    case 13:
      return phone.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4');
    default:
      return phone;
  }
}
