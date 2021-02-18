from flask import Flask, request

app = Flask("Capro")

# função para fazer busca no banco
def SearchCulture(city, culture, dayStart, dayEnd, area):
    # finge que faz a busca no banco
    return { "city": city }


# seta a rota e chama a função de buscar a cultura
@app.route("/search", methods=["POST"])
def SearchCultureRequest():
    body = request.get_json()

    if("city" not in body):
        return Responses(400, "O campo Cidade é obrigatório!")

    if("culture" not in body):
        return Responses(400, "O campo Cultura é obrigatório!")

    if("dayStart" not in body):
        return Responses(400, "O campo Do dia é obrigatório!")

    if("dayEnd" not in body):
        return Responses(400, "O campo Até o dia é obrigatório!")

    if("area" not in body):
        return Responses(400, "O campo Área plantada em hectares é obrigatório!")

    dataSearch = SearchCulture(body["city"], body["culture"], body["dayStart"], body["dayEnd"], body["area"])

    return Responses(200, "Busca realizada com sucesso", "busca", dataSearch)


# função para gerar resposta geral
def Responses(status, message, name_content=False, content=False):
    response = {}
    response["status"] = status
    response["message"] = message

    if (name_content and content):
        response[name_content] = content

    return response

app.run()