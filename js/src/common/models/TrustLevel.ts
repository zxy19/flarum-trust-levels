import Model from 'flarum/common/Model';
import type { ConditionData, RewardData } from '@xypp-collector/common/types/data';


export default class TrustLevel extends Model {
  name = Model.attribute<string>('name');
  condition = Model.attribute<ConditionData[]>('conditions');
  icon = Model.attribute<string>('icon');
  level = Model.attribute<number>('level');
  group_id = Model.attribute<number>('group_id');
  next = Model.hasOne<TrustLevel>('next');
}