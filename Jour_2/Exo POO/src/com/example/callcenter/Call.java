package com.example.callcenter;

public class Call {

    int callNumber;
    boolean isHandled;
    String handler;

    public void setHandled(boolean handled) {
        isHandled = handled;
    }

    public void setHandler(String handler) {
        this.handler = handler;
    }
    public void setCallNumber(int callNumber) {
        this.callNumber = callNumber;
    }

    public boolean isHandled() {
        return isHandled;
    }

    public String getHandler() {
        return handler;
    }

    public int getCallNumber() {
        return callNumber;
    }


}
