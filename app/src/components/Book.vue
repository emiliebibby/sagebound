<template>
    <div class="book">
        <img class="book-cover" :src="cover" alt="Book cover" />
    </div>
</template>

<script setup>
defineProps({
    cover: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.book {
    position: relative;
    width: 90px;
    height: 135px;
    background: #f33139;
    border-radius: 14px 10px 8px 12px;
    background-image: linear-gradient(to right, #d11f2f 22px, #ba0716 24px, transparent 24px);
    box-shadow: 2px 5px 18px 0px #fea60044;
    flex: 0 0 auto;
    margin-bottom: 8px;
    overflow: visible;
    transition: transform 0.15s;
    cursor: pointer;
}
.book:after {
    content: '';
    position: absolute;
    height: 16px;
    width: 84px;
    bottom: 3px;
    right: 0px;
    background: white;
    border-radius: 14px 0px 8px 14px;
    box-shadow: inset 2px 3px 0px 0px #e4e0ce;
    background-image: linear-gradient(
        to bottom,
        transparent 3px,
        #e4e0ce 4px,
        transparent 4px,
        transparent 6px,
        #e4e0ce 6px,
        transparent 7px,
        transparent 9px,
        #e4e0ce 9px,
        transparent 10px,
        transparent 12px,
        #e4e0ce 12px,
        transparent 13px,
        transparent 15px,
        #e4e0ce 15px,
        transparent 16px,
        transparent 18px,
        #e4e0ce 18px,
        transparent 19px,
        transparent 21px,
        #e4e0ce 21px,
        transparent 22px
    );
    z-index: 1;
}
.book:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 36px;
    right: 12px;
    top: 18px;
    background: #d11f2f;
    border-radius: 4px;
    box-shadow: 0px 9px #d11f2f;
    z-index: 2;
}
.book-cover {
    position: absolute;
    top: 0;
    right: 0; /* right-align by setting right: 0 and removing width-based left offset */
    width: 76px; /* reduced by 2px to avoid overlap */
    height: 116px; /* reduced by 2px to fix overhang */
    object-fit: cover;
    border-radius: 0 10px 0px 0; /* round only the outer corners */
    box-shadow: 0 2px 8px 0 #ba071633;
    z-index: 2;
    background: #fff;
    margin: 0;
    padding: 0;
}
</style>
