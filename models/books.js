const books = [
  {
    'id':0,
    name:'0',
    author:'0',
    description:'0110010001100101011100110110001101110010011010010111000001110100011010010110111101101110',
    numberOfPages:'1000',
    cost:100,
    inStock: true,
  }
]

export class Book{
  static async getAll(){
    return books;
  }
  static async create(bookData){}
  static async update(id, bookData){}
  static async delete(id){}
}