public class Main {
    public static void main(String[] args) {
        CallCenter callCenter = new CallCenter();
        Call call = new Call();
        Call call2 = new Call();
        Call call3 = new Call();
        Call call4 = new Call();
        Call call5 = new Call();
        Call call6 = new Call();

        callCenter.dispatchCall(call);
        callCenter.dispatchCall(call2);
        callCenter.dispatchCall(call3);
        callCenter.dispatchCall(call4);
        callCenter.dispatchCall(call5);
        callCenter.dispatchCall(call6);
    }
}