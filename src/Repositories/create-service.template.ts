

abstract class TemplateCreateService{
  public templateMethod():void{

  }

  protected MoreThanTwoServicesByMonth():void{
    //uma pessoa nao pode criar mais de 2 servicos por mes
    //se o tamanho for igual a 2 e mes do servico1 e mes do servico2 forem iguais ao mes que ela passou
    //entao return
  }

  protected DateAndTimeEqualsByUser():void{
    //data e hora nao pode ser iguais entre os servicos
    //se ja existir e a data e horario forem iguais ao que ela passou 
    //entao return
  }

  protected DateAndTimeEquals():void{
    //data e hora nao pode ser iguais entre os servicos
    //se ja existir e a data e horario forem iguais ao que ela passou 
    //entao return
  }

}