import { Model } from '../../../core/domain/base.model';

export interface Product extends Model {
  name: string;
  price: number;
  description: string;
  imageSrc: string;
}
