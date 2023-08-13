export const ProfileFormData = {
  firstname: null,
  lastname: null,
  email: null,
  profilePicture: null,
  birthday: null,
  phone: null,
  firstAddress: null,
  secondAddress: null,
  country: null,
  city: null,
  state: null,
  zipcode: null,
  quSuffer: null,
  quSufferRate: null,
  quUsed: null,
  doctorOpinion: null,
  experience: null,
};
export const ProfileFormTemplate = {
  firstname: {
    icon: 'user',
    label: 'FIRSTNAME',
    formKey: 'firstname',
    placeholder: 'FIRSTNAME_PH',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  lastname: {
    icon: 'user',
    label: 'LASTNAME',
    formKey: 'lastname',
    placeholder: 'LASTNAME_PH',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  email: {
    icon: 'mail',
    label: 'EMAIL',
    formKey: 'email',
    placeholder: 'EMAIL_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 70,
    textTransform: 'lowercase',
  },
  phone: {
    icon: 'phone',
    label: 'PHONE',
    formKey: 'phone',
    placeholder: 'PHONE_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 70,
    textTransform: 'lowercase',
  },
  password: {
    icon: 'key',
    label: 'PASSWORD',
    formKey: 'password',
    placeholder: 'PASSWORD_PH',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  birthday: {
    icon: 'calendar',
    label: 'Birthday',
    formKey: 'birthday',
    placeholder: 'Birthday_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 70,
    textTransform: 'lowercase',
  },
  quSuffer: {
    icon: 'info',
    label: 'QUE_SUFFER',
    formKey: 'quSuffer',
    placeholder: 'QUE_SUFFER_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 80,
    textTransform: 'lowercase',
  },
  quSufferRate: {
    icon: 'info',
    label: 'QUE_RATE',
    formKey: 'quSufferRate',
    placeholder: 'QUE_RATE_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 80,
    textTransform: 'lowercase',
  },
  quUsed: {
    icon: 'info',
    label: 'QUE_USED',
    formKey: 'quUsed',
    placeholder: 'QUE_USED_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 80,
    textTransform: 'lowercase',
  },
  firstAddress: {
    icon: 'map-pin',
    label: 'FirstAddress',
    formKey: 'firstAddress',
    placeholder: 'FirstAddress_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 100,
    textTransform: 'capitalize',
  },
  secondAddress: {
    icon: 'map-pin',
    label: 'SecondAddress',
    formKey: 'secondAddress',
    placeholder: 'SecondAddress_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 100,
    textTransform: 'capitalize',
  },
  country: {
    icon: 'map',
    label: 'Country',
    formKey: 'country',
    placeholder: 'Country_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'uppercase',
  },
  city: {
    icon: 'map',
    label: 'City',
    formKey: 'city',
    placeholder: 'City_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  state: {
    icon: 'map',
    label: 'State',
    formKey: 'state',
    placeholder: 'state_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  zipcode: {
    icon: 'map',
    label: 'Zipcode',
    formKey: 'zipcode',
    placeholder: 'zipcode_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'lowercase',
  },
  doctorOpinion: {
    icon: 'pen-tool',
    label: 'DoctorOpinion',
    formKey: 'doctorOpinion',
    placeholder: 'DoctorOpinion_PH',
    keyType: 'default',
    maxLen: 200,
    multiline: true,
    maxHeight: 150,
    width: 100,
    textTransform: 'lowercase',
  },
  experience: {
    icon: 'pen-tool',
    label: 'EXPERIENCE',
    formKey: 'experience',
    placeholder: 'EXPERIENCE_PH',
    keyType: 'default',
    maxLen: 35,
    multiline: true,
    maxHeight: 150,
    width: 100,
    textTransform: 'lowercase',
  },
};

export const ReturnFormData = {
  dentistId: null,
  dentistFullname: null,
  dentistImg: null,
  phone: null,
  productName: null,
  customerId: null,
  customerFullname: null,
  shippingMethod: null,
  deliveryPhone: null,
  deliveryCode: null,
  returnDate: null,
  returnReason: null,
};
export const ReturnFormTemplate = {
  dentistId: {
    icon: 'user',
    label: 'dentistId',
    formKey: 'dentistId',
    placeholder: 'dentistId',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  dentistFullname: {
    icon: 'user',
    label: 'dentistFullname',
    formKey: 'dentistFullname',
    placeholder: 'dentistFullname',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  dentistImg: {
    icon: 'user',
    label: 'dentistImg',
    formKey: 'dentistImg',
    placeholder: 'dentistImg',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  phone: {
    icon: 'user',
    label: 'phone',
    formKey: 'phone',
    placeholder: 'phone',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  productName: {
    icon: 'user',
    label: 'productName',
    formKey: 'productName',
    placeholder: 'productName',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  customerId: {
    icon: 'user',
    label: 'customerId',
    formKey: 'customerId',
    placeholder: 'customerId',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  customerFullname: {
    icon: 'user',
    label: 'customerFullname',
    formKey: 'customerFullname',
    placeholder: 'customerFullname',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  shippingMethod: {
    icon: 'user',
    label: 'ShippingMethod',
    formKey: 'shippingMethod',
    placeholder: 'shippingMethod_PH',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  deliveryPhone: {
    icon: 'user',
    label: 'deliveryPhone',
    formKey: 'deliveryPhone',
    placeholder: 'PHONE_PH',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  deliveryCode: {
    icon: 'user',
    label: 'DELIVERCODE',
    formKey: 'deliveryCode',
    placeholder: 'DELIVERCODE_PH',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  returnDate: {
    icon: 'user',
    label: 'returnDate',
    formKey: 'returnDate',
    placeholder: 'RETURNDATE_PH',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 50,
    textTransform: 'capitalize',
  },
  returnReason: {
    icon: 'user',
    label: 'returnReason',
    formKey: 'returnReason',
    placeholder: 'RETURNREASON_PH',
    keyType: 'default',
    maxLen: 25,
    multiline: false,
    maxHeight: 62,
    width: 100,
    textTransform: 'capitalize',
  },
};
