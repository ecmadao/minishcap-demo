import moment from 'moment'

moment.locale('zh-cn')

export const formatToDatetime = (date: Date): string =>
    moment(date).format('YYYY-MM-DD HH:mm:ss')