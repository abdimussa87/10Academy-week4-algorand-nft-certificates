import beaker as bk
import pyteal as pt


# global state
class MyState:
    result = bk.GlobalStateValue(pt.TealType.uint64)


app = bk.Application("Calculator", state=MyState())


# external decorator makes the method be visible for calling from frontend
@app.external
def add(a: pt.abi.Uint64, b: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    add_result = a.get() + b.get()
    return pt.Seq(app.state.result.set(add_result), output.set(add_result))


@app.external
def minus(a: pt.abi.Uint64, b: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    minus_result = a.get() + b.get()
    return pt.Seq(app.state.result.set(minus_result), output.set(minus_result))


@app.external(read_only=True)
def read_result(*, output: pt.abi.Uint64) -> pt.Expr:
    return output.set(app.state.result)


if __name__ == "__main__":
    spec = app.build()
    spec.export("artifacts")
