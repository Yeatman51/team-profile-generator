class HtmlSetup {
    static beginHtml () {
        let html = "<!DOCTYPE html>\n";
        html += "<html>\n";
        return html;
    }

    static makeHead () {
        let html = "    <head>\n";
        html += "        <meta charset='UTF-8'>\n";
        html += '        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
        html += "        <title>Team Profile</title>\n";
        html += '        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>\n';
        html += '        <link rel="stylesheet" type="text/css" href="style.css"/>\n';
        html += "    </head>\n";
        return html;
    }

    static beginBody() {
        return "    <body>\n";
    }

    static makeHeader() {
        let html = '        <div class="jumbotron jumbotron-fluid">\n';
        html += '            <div class="container">\n';
        html += '                <h1 class="display-4">My Team</h1>\n';
        html += '            </div>\n';
        html += '        </div>\n';
        return html;
    }

    static beginCards() {
        return '        <div id="card-container">\n';
    }

    static makeCard(name, role, id, email, extra) {
        let html = '            <div class="card">\n';
        html += '                <div class="card-header">\n';
        html += '                    <h3 class="employee-name">' + name + '</h3>\n';
        html += '                    <h4 class="employee-role">' + role + '</h4>\n';
        html += '                </div>\n';
        html += '                <div class="card-info">\n';
        html += '                    <div class="employee-id">ID: ' + id + '</div>\n';
        html += '                    <div class="employee-email">Email: <a href="mailto: ' + email + '">' + email + '</a></div>\n';
        if (role === "Manager") {
            html += '                    <div class="employee-extra">Office number: ' + extra + '</div>\n';
        } else if (role === "Engineer") {
            html += '                    <div class="employee-extra">GitHub: ' + extra + '</div>\n';  
        } else if (role === "Intern") {
            html += '                    <div class="employee-extra">School: ' + extra + '</div>\n';
        }
        html += '                </div>\n';
        html += '            </div>\n';
        return html;
    }

    static endCardsBodyAndHtml() {
        let html = "        </div>\n";
        html += "    </body>\n";
        html += "</html>\n";
        return html;
    }
}

module.exports = HtmlSetup;