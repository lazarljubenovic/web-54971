interface Interface {
  foo (): void
}

class Class {
  private inter: Interface = {
    foo: () => {
      this.foo()
    }
  }
  public foo () {

  }
}

