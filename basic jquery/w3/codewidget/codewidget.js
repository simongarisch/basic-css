// https://www.tutorialspoint.com/jqueryui/jqueryui_widgetfactory.htm

$.widget("codewidget", {

    _create: function() {
        this.element = `
        <section id="code_snippets" style="padding-bottom: 0;" class="section">
	         <div style="margin-bottom: 0;"
	            class="tabs is-centered is-toggle-rounded has-background-white-ter">
	           <ul>
             <li></li>
             </ul>
          </div>
        </section>
        `
    },

});
