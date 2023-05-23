const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  export const dataFormat = (str)=>{
    const date = new Date(str);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };