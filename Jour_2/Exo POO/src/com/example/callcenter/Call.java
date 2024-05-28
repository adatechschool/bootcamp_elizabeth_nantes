package com.example.callcenter;

public class Call {

    int callNumber;
    boolean isHandled;

    public Call(int callNumber, boolean isHandled) {
        this.callNumber = callNumber;
        this.isHandled = isHandled;
    }


    public void setHandled(boolean handled) {
        isHandled = handled;
    }


    public void setCallNumber(int callNumber) {
        this.callNumber = callNumber;
    }

    public boolean isHandled() {
        return isHandled;
    }



    public int getCallNumber() {
        return callNumber;
    }


}
