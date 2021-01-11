if (context.flow=="PROXY_REQ_FLOW") {
    var filter = context.getVariable('private.filter_by_query');
    context.setVariable("filter_query_value", filter);
    if (filter == 'query-value') {
        context.setVariable("filter_policy", true);
    } else {
        context.setVariable("filter_policy", false);
    }
}