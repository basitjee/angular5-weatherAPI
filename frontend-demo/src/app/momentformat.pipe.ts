import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'momentformat'
})
export class MomentformatPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let today = moment();

    let yesterday = moment().add(-1, 'days');
    let tomorrow = moment().add(1, 'days');
    let nextTomorrow = moment().add(2,'days');

    var sys = moment(value);
    if(sys.isSame(yesterday)) {
      return "Yesterday";
    }
    else if(sys.isAfter(yesterday) && sys.isSameOrBefore(today)) {
      return "Today";
    }
    else if(sys.isAfter(today) && sys.isSameOrBefore(tomorrow)){
      return "Tomorrow";
    }
    else {
      return moment(value).format("LL");
    }
    return ;
  }

}
